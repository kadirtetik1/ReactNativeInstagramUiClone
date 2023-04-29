import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './Screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet} from 'react-native'; //Iphone için SafeAreaView burada tanımlanmalı





export default function App() {
  return (
    <SafeAreaView style={styles.container}>




<NavigationContainer>{

<Screens/>


}</NavigationContainer>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container:{

    flex:1,
    backgroundColor:"#ffffff"

  },




})