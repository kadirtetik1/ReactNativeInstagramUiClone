import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

//Screens
import HomeScreen from './Screens/home/Index';
import SearchScreen from './Screens/Search';
import ReelsScreen from './Screens/Reels';
import ShopScreen from './Screens/Shop';
import ProfileScreen from './Screens/Profile';


//Icons

import { IconsHome, IconsSearch, IconsReels, IconsShop } from './icons';


const Tab = createBottomTabNavigator();

function Screens() {
  return (
    <Tab.Navigator screenOptions={{
    tabBarShowLabel:false, 
    headerShown:false,
   
    
    
    }}>
      <Tab.Screen name="Home" component={HomeScreen}
      options={{
        tabBarIcon:({focused, color})=>(
            <IconsHome/>

        )
      }}
      
      
      />
      <Tab.Screen name="Search" component={SearchScreen}
      
      options={{
        tabBarIcon:({focused, color})=>(
            <IconsSearch/>

        )
      }}
      />
      <Tab.Screen name="Shop" component={ShopScreen}
      
      options={{
        tabBarIcon:({focused, color})=>(
            <IconsShop/>

        )
      }}
      />
      <Tab.Screen name="Reels" component={ReelsScreen}
      
      options={{
        tabBarIcon:({focused, color})=>(
            <IconsReels/>

        )
      }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
       options={{
        tabBarIcon:({focused, color})=>(
           <Image style={[styles.profile, {borderColor: focused? "#000000" : "transparent"} ]} source={{
            uri:"https://avatars.githubusercontent.com/u/125480282?s=96&v=4"
           }}/>

        )
      }}
       />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

  profile:{
    width:30,
    height:30,
    borderRadius:15,
    borderWidth:1,
  }
})

export default Screens