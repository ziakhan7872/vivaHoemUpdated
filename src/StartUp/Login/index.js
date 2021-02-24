import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ImageBackground,TouchableOpacity } from 'react-native';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
import styles from './styles';
import { createStackNavigator } from '@react-navigation/stack';

// import SucessTracker from './SucessTracker/index';

const Stack3 = createStackNavigator();

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {

        };
	}
	render() {
		return (
			<ScrollView>
				<View style={{flex:1,justifyContent:'center', alignItems:'center', marginTop: 100}}>
                    <Text>Its a Login Page</Text>
                    <TouchableOpacity style={{backgroundColor:"green"}} onPress={()=> this.props.navigation.navigate("Main")}>
                        <Text>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor:"red"}} onPress={()=> this.props.navigation.navigate("SignUp")}>
                        <Text>SignUp</Text>
                    </TouchableOpacity>
                </View>
			</ScrollView>
		);
	}
}

export default index;
