import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Map from "../components/Map"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NavigateCard from "../components/NavigateCard"
import RideOptionsCard from "../components/RideOptionsCard"
import { Icon } from "@rneui/themed"
import { useNavigation } from "@react-navigation/native"

const MapScreen = () => {
  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        className="bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full"
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen
