import { FlatList, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/themed"

const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "Yomiuriland-mae Station"
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination: "Shibuya Scramble Square"
  },
]

const NavFavorites = () => {
  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View style={{ height: 0.5}} className="bg-gray-200" />
      )}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <View className="mr-4 rounded-full bg-gray-300 p-3">
            <Icon
              name={icon}
              type="ionicon"
              color="white"
              size={18}
            />
          </View>
          <View>
            <Text className="font-semibold text-lg">{ location }</Text>
            <Text className="text-gray-500">{ destination }</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavFavorites
