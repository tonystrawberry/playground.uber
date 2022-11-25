import { View, Text } from 'react-native'
import React from 'react'
import MapView from "react-native-maps"

const Map = () => {
  return (
    <MapView
      className="flex-1"
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.9,
        longitude: -122.4,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    />
  )
}

export default Map
