import styles from './styles';
import React, { Component } from 'react';
import { Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class index extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {};
	}
	render()
	{
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

					<TouchableOpacity style={styles.buttonView2} onPress={() => this.props.navigation.navigate("Success")} >
						<Text style={styles.ButtonTextTouch}>Success Tracker</Text>
						<Image
							style={styles.ButtonIcon}
							source={require('../../../assets/right-arrow.png')}
						/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.buttonView2} onPress={() => this.props.navigation.navigate("ViewProfile")}>
						<Text style={styles.ButtonTextTouch}>View Profile</Text>
						<Image
							style={styles.ButtonIcon}
							source={require('../../../assets/right-arrow.png')}
						/>
					</TouchableOpacity>

					<View style={{ marginTop: 20 }}>
						<TouchableOpacity style={styles.buttonView2} onPress={() => this.props.navigation.navigate("ReplayTemps")}>
							<Text style={styles.ButtonTextTouch}>Replay Templates</Text>
							<Image
								style={styles.ButtonIcon}
								source={require('../../../assets/right-arrow.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonView2} onPress={() =>this.props.navigation.navigate("Categories")}>
							<Text style={styles.ButtonTextTouch}>Categories & Tasks</Text>
							<Image
								style={styles.ButtonIcon}
								source={require('../../../assets/right-arrow.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonView2} onPress={() => this.props.navigation.navigate("VacationMode")}>
							<Text style={styles.ButtonTextTouch}>Vacation Mode</Text>
							<Image
								style={styles.ButtonIcon}
								source={require('../../../assets/right-arrow.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonView2}>
							<Text style={styles.ButtonTextTouch}>Users</Text>
							<Image
								style={styles.ButtonIcon}
								source={require('../../../assets/right-arrow.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonView2}>
							<Text style={styles.ButtonTextTouch}>Change Company</Text>
							<Image
								style={styles.ButtonIcon}
								source={require('../../../assets/right-arrow.png')}
							/>
						</TouchableOpacity>
					</View>

					<View style={{ marginTop: 20 }}>
						<TouchableOpacity style={styles.buttonView2}>
							<Text style={styles.ButtonTextTouch}>Get Help</Text>
							<Image
								style={styles.ButtonIcon}
								source={require('../../../assets/right-arrow.png')}
							/>
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
