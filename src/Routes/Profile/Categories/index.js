import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ImageBackground, StyleSheet, Image , StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
// import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import Header from './Header/index';
import CheckBox from './CheckBox/index'
class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
		<>
			{/* <StatusBar
			animated={true}
			backgroundColor="#722f8c"
		
			/> */}

	   
			 <Header />
            <CheckBox/>
			     
	

			</>
		);
	}
}

export default index;

const styles = StyleSheet.create({
	
});
