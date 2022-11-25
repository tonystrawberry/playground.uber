import { SafeAreaView, View, Image } from 'react-native'
import React from 'react'
import NavOptions from "../components/NavOptions"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { GOOGLE_API_KEY } from "@env"
import { useDispatch } from "react-redux"
import { setDestination, setOrigin } from "../slices/navSlice"
import NavFavorites from "../components/NavFavorites"

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
          }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18
            }
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))

            dispatch(setDestination(null))
          }}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_API_KEY,
            language: "en"
          }}
          fetchDetails={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
