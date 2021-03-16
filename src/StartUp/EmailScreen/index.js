import styles from './styles';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, View, Text, TextInput, Image, Alert } from 'react-native';

class index extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			email: "",
		};
	}
	validateEmail()
	{
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (reg.test(this.state.email.trim()) === true)
		{
			this.props.navigation.navigate("PasswordScreen")
		} else
		{
			Alert.alert('Please enter valid email')
		}
	}
	render()
	{
		return (
			<View style={styles.mainContainer}>
				<LinearGradient
					colors={['rgba(119,52,145,255)', 'transparent']}
					style={styles.mainContainer}
				>
					<View style={styles.rightArrowTouchableContainer}>
						<TouchableOpacity onPress={() => this.validateEmail()}>
							<Image
								style={styles.rightArrowTouchableImage}
								source={require('../../../assets/forwardarrowblue.png')} />
						</TouchableOpacity>
					</View>
					<View style={styles.emailAddressTextContainer}>
						<Text style={styles.emailAddressTextStyle}>Your email address</Text>
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							style={styles.textInputStyle}
							onChangeText={email => this.setState({ email })
							}
							value={this.state.email}
						/>
					</View>
					<View style={styles.privacyPolicymainContainer}>
						<View style={styles.termsOfUseContainer}>
							<TouchableOpacity>
								<Text style={styles.termsOfUsetextStyle}>terms of use</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.privacypolicyContainer}>
							<TouchableOpacity>
								<Text style={styles.privacyPolicytextStyle}>Privacy policy</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.versionContolContainer}>
						<Text style={styles.versionContolTextStyle}>v1.0.0</Text>
					</View>
				</LinearGradient>
			</View>
		);
	}
}
export default index;
