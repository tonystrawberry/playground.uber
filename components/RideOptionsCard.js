import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Icon } from "@rneui/themed"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { selectTravelTimeInformation } from "../slices/navSlice"

const data = [
  {
    id: "Peugeot",
    title: "Peugeot",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Toyota",
    title: "Toyota",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Mercedes",
    title: "Mercedes",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
]

const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
  const navigation = useNavigation()
  const [ selected, setSelected ] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView className="bg-white flex-grow flex-1">
      <View style={{ zIndex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          className="absolute top-3 left-5 z-100 p-3 rounded-full"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">Select a Ride - {travelTimeInformation?.distance.text}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className={`flex-row items-center justify-between px-8 ${id === selected?.id && "bg-gray-200"}`}
          >
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: "contain"
              }}
              source={{ uri: image }}
            />
            <View className="-ml-4">
              <Text className="text-xl font-semibold">{title}</Text>
              <Text>{ travelTimeInformation?.duration.text }</Text>
            </View>
            <Text className="text-xl">
              { new Intl.NumberFormat('en-gb', {
                style: "currency",
                currency: "GBP"
              }).format(
                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
              ) }
            </Text>
          </TouchableOpacity>
        )}
      />

      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity
          disabled={!selected}
          className={`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text className="text-center text-white text-xl">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard
