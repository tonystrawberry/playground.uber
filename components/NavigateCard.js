import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { GOOGLE_API_KEY } from "@env"
import { setDestination } from "../slices/navSlice"
import { useDispatch } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import NavFavorites from "./NavFavorites"
import { Icon } from "@rneui/themed"

const NavigateCard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good morning, Tony!</Text>
      <View className="border-t border-gray-200 flex-shrink z-10">
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          styles={toInputBoxStyles}
          enablePoweredByContainer={false}
          returnKeyType={"search"}
          minLength={2}
          query={{
            key: GOOGLE_API_KEY,
            language: "en"
          }}
          onPress={(data, details = null) => {
            dispatch(setDestination({
              location: details.geometry.location,
              description: data.description
            }))

            navigation.navigate("RideOptionsCard")
          }}
          fetchDetails={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
      </View>

      <NavFavorites />

      <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
        <TouchableOpacity
          className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex flex-row justify-between w-24 px-4 py-3 rounded-full">
          <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
          <Text className="text-center">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

export const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})
