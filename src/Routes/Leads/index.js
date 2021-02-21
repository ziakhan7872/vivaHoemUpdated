// import React, { Component } from "react";
// import { Text, View, ScrollView } from "react-native";

// import styles from "./styles";


// class index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//   render() {
//     return (
//       <ScrollView>
//         <View style={styles.mainContainer}>
//          <Text>Leads</Text>
//         </View>
//       </ScrollView>
//     );
//   }
// }

// export default index;




import * as React from 'react';
import {StyleSheet,View, AsyncStorage,Text, ToastAndroid} from 'react-native'
import {Dimensions} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Active from "./Active/index"
import Cancel from "./Cancel/index";
import Completed from "./completed/index";

import styles from "./styles";
// import Login from '../Screens/Login';
const Tab3 = createMaterialTopTabNavigator();

export default class index extends React.Component {
  constructor(){
    super();
  }

//     componentDidMount() {
//     this._unsubscribe = navigation.addListener('focus', () => {
//       // do something
//     });
//   }
//  componentWillMount(){
//   didBlurSubscription.remove();
//  }

  render(){
  return (
    <Tab3.Navigator
     style={{backgroundColor:"#f5f4f9"}} 
     Tab2BarOptions={{
        style: { marginTop: 20, borderRadius: 10, width: Dimensions.get('screen').width-40, alignSelf:'center', height: 50,}
    }}
    
    >

      <Tab3.Screen name="Active" component={Active} options={{
           tabBarLabel:()=> <Text style={styles.TabStyle}>ACTIVE</Text>
      }} />

      <Tab3.Screen name="Cancel" component={Cancel} options={{
           tabBarLabel:()=> <Text style={styles.TabStyle}>CANCEL</Text>
      }}  />

      <Tab3.Screen name="Completed" component={Completed} options={{  
           tabBarLabel:()=> <Text style={styles.TabStyle}>COMPLETED</Text>
      }}  />
      
    </Tab3.Navigator>
  
    
    );
  }
}
