import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
import styles from './styles';
import { createStackNavigator } from '@react-navigation/stack';

import SucessTracker from './SucessTracker/index';

const Stack3 = createStackNavigator();

function ProfileStack2() {
	return (
		<Stack3.Navigator>
			<Stack3.Screen name="SuccessTra" component={SucessTracker} />
      
		</Stack3.Navigator>
	);
}

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<ScrollView>
				<View style={styles.mainContainer}>
					<ImageBackground source={require('../../../assets/logobg.png')} style={styles.image}>
						<View style={styles.TopView}>
						    
								<Text style={styles.text}>Company 1</Text>
	
						</View>
					</ImageBackground>

					<TouchableOpacity style={styles.buttonView}>
						<Text style={styles.ButtonText}>Upgrade to Brand Builder</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.buttonView2} onPress={()=> this.props.navigation.navigate("Success")} >
						<Text style={styles.ButtonTextTouch}>Success Tracker</Text>
						<Text style={styles.ButtonIcon}>></Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.buttonView2} onPress={()=> this.props.navigation.navigate("ViewProfile")}>
						<Text style={styles.ButtonTextTouch}>View Profile</Text>
						<Text style={styles.ButtonIcon}>></Text>
					</TouchableOpacity>

					<View style={{ marginTop: 20 }}>
						<TouchableOpacity style={styles.buttonView2} onPress={()=> this.props.navigation.navigate("ReplayTemps")}>
							<Text style={styles.ButtonTextTouch}>Replay Templates</Text>
							<Text style={styles.ButtonIcon}>></Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonView2} onPress={()=> this.props.navigation.navigate("Categories")}>
							<Text style={styles.ButtonTextTouch}>Categiries & Tasks</Text>
							<Text style={styles.ButtonIcon}>></Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonView2}>
							<Text style={styles.ButtonTextTouch}>Vacation Mode</Text>
							<Text style={styles.ButtonIcon}>></Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonView2}>
							<Text style={styles.ButtonTextTouch}>Users</Text>
							<Text style={styles.ButtonIcon}>></Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonView2}>
							<Text style={styles.ButtonTextTouch}>Change Company</Text>
							<Text style={styles.ButtonIcon}>></Text>
						</TouchableOpacity>
					</View>

					<View style={{ marginTop: 20 }}>
						<TouchableOpacity style={styles.buttonView2}>
							<Text style={styles.ButtonTextTouch}>Get Help</Text>
							<Text style={styles.ButtonIcon}>></Text>
						</TouchableOpacity>
					</View>

					<View style={{ marginTop: 20, marginBottom: 20 }}>
						<TouchableOpacity style={styles.buttonViewlogout}>
							<Text style={styles.ButtonTextTouchLogout}>Logout</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		);
	}
}

export default index;
