import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    DrawerLayoutAndroid,
    Pressable,
    Button
  } from "react-native";
  import Item from "../components/Item";
  
  import React, { useRef, useState } from "react";
  import MapboxGL from "@react-native-mapbox-gl/maps";
  import { Feather } from "@expo/vector-icons";
  //import DrawerScreen from "./DrawerScreen";
  MapboxGL.setAccessToken(
    "pk.eyJ1IjoibWFtZW5jb2RlIiwiYSI6ImNrbmMyNDhmbzF4ZHIyd282NDJ5cDl4dmEifQ.kB0rN0t8PgA822CqczbbqQ"
  );
  
  const { width, height } = Dimensions.get("window");
  
  export default function HomeScreen({navigation}) {
    const drawer = useRef(null);
    const navigationView = () => (
      <View style={[styles.container, styles.navigationContainer]}>
   <Item title="Profile" name="person-outline"
        onPress={()=> navigation.navigate('profile')}
      />
      <Item title="Cards" name="card-outline" 
        onPress={()=> navigation.navigate('payment')}
      />
      <Item title="Settings" name="settings-outline" 
        onPress={()=> navigation.navigate('setting')}
      />
      <Item title="Activites" name="time-outline" 
        onPress={()=> navigation.navigate('recent')}
      />
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={navigationView}
      >
        <View style={styles.container}>
          <MapboxGL.MapView
            styleURL={MapboxGL.StyleURL.Street}
            zoomLevel={10}
            centerCoordinate={[38.763611, 9.005401]}
            showUserLocation={true}
            style={{ width: width, height: height }}
          >
            <MapboxGL.Camera
              zoomLevel={13}
              centerCoordinate={[38.763611, 9.005401]}
            ></MapboxGL.Camera>
          </MapboxGL.MapView>
          <TouchableOpacity
            onPress={() => drawer.current.openDrawer()}
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              marginTop: 20,
              marginLeft: 20
            }}
          >
            <Feather name="menu" size={29} style={{ padding: 10 }} />
          </TouchableOpacity>
        </View>
      </DrawerLayoutAndroid>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "transparent"
    },
  
    navigationContainer: {
      backgroundColor: "#ecf0f1",
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    }
  });
  