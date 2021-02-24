// import React, { Component } from "react";
// import { Text, View, ScrollView } from "react-native";
// import AllReviews from "./AllReviews/index";
// import DraftsReviews from "./DraftsReviews/index";
// import PublishedReviews from "./PublishedReviews/index";
// import SentReviews from "./SentReviews/index";

// import styles from "./styles";


// class index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//        allReviews :1,
//       draftsReviews :2,
//       sentReviews :3,
//        publishedReviews :4,
      
   
//     };
//   }
//   render() {
//     return (
//       <ScrollView>
//         <View style={styles.mainContainer}>
//           {this.state.allReviews =1 &&(
//           <AllReviews/>
//           )
//           }
//            {this.state.draftsReviews = 2 &&(
//           <DraftsReviews/>
//            )}

//             {this.state.sentReviews =3 &&(
//           <SentReviews/>
//             )}
//              {this.state.publishedReviews =4 &&(
//           <PublishedReviews/>
//              )}
//         </View>
//       </ScrollView>
//     );
//   }
// }

// export default index;



import * as React from 'react';
import {StyleSheet,View, AsyncStorage, ToastAndroid} from 'react-native';
import {Dimensions,Text,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllReviews from "./AllReviews/index";
import DraftsReviews from "./DraftsReviews/index";
import PublishedReviews from "./PublishedReviews/index";
import SentReviews from "./SentReviews/index";

import styles from "./styles";
// import Login from '../Screens/Login';
const Tab2 = createMaterialTopTabNavigator();

export default class index extends React.Component {
  constructor(){
    super();
  }

  render(){
  return (
      <>
      <View style={{flex: 1}}>
        <View style={styles.headerView}>
        <View style={styles.headerInnserView}>
          <View style={{flexDirection:'row', justifyContent:'center'}}>
            <TouchableOpacity>
        <Image source={require('../../../assets/leftarrow.png')} style={styles.headericon}/>
        </TouchableOpacity>
        <Text style={styles.headertext} >Request a Review</Text>
        </View>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate("AddRev")}>
        <Image source={require('../../../assets/edit.png')} style={styles.headericon}/>
        </TouchableOpacity>
        </View>
      </View>
      
    <Tab2.Navigator
     style={{backgroundColor:"#f5f4f9"}} 
     Tab2BarOptions={{
        style: { marginTop: 20, borderRadius: 10, width: Dimensions.get('screen').width-40, alignSelf:'center', height: 50}
    }} >

      <Tab2.Screen name="All" component={AllReviews}  options={{
           tabBarLabel:()=> <Text style={styles.TabStyle}>ALL</Text>
      }}/>
      <Tab2.Screen name="Drafts" component={DraftsReviews} options={{
           tabBarLabel:()=> <Text style={styles.TabStyle}>DRAFTS</Text>
      }}/>
      <Tab2.Screen name="Sent" component={SentReviews} options={{
           tabBarLabel:()=> <Text style={styles.TabStyle}>SENT</Text>
      }} />
      <Tab2.Screen name="Published" component={PublishedReviews} options={{
           tabBarLabel:()=> <Text style={styles.TabStyle}>PUBLISHED</Text>
      }} />
      
    </Tab2.Navigator>
    </View>
    </>
    );
  }
}

// const styles = StyleSheet.create({
//   loginButton : {
//     backgroundColor: '#737373',
//     borderRadius: 5,
//     height: 45,
//     marginTop: 10,
//     marginLeft: 15,
//     marginRight: 15,
//   },
// })
