import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoibWFtZW5jb2RlIiwiYSI6ImNrbmMyNDhmbzF4ZHIyd282NDJ5cDl4dmEifQ.kB0rN0t8PgA822CqczbbqQ');


const {width, height}= Dimensions.get("window");
export default function MapTwo() {
  return (
    <View style={{flex: 1, height: "100%", width: "100%" }}>
      <MapboxGL.MapView
        styleURL={MapboxGL.StyleURL.Street}
        zoomLevel={16}
        centerCoordinate={[38.763611, 9.005401]}
        showUserLocation={true}
        style={{width: width, height:height}}>
          <MapboxGL.Camera
            zoomLevel={10}
            centerCoordinate={[38.763611, 9.005401]}
          >
          </MapboxGL.Camera>
      </MapboxGL.MapView>
    </View>
  )
}

const styles = StyleSheet.create({})
