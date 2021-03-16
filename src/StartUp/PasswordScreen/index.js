import styles from './styles';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Mytextinput from "./Mytextinput";

class index extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			text: '',
			hidePassword: true,
		};
	}
	 managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

	render()
	{
		return (
			<View style={styles.mainContainer}>
				<LinearGradient
					colors={['rgba(119,52,145,255)', 'transparent']}
					style={styles.mainContainer}
				>
					<View style={styles.rightArrowTouchableContainer}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
							<Image
								style={styles.rightArrowTouchableImage}
								source={require('../../../assets/forwardarrowblue.png')} />
						</TouchableOpacity>
					</View>
					<View style={styles.passwordAddressTextContainer}>
						<Text style={styles.passwordAddressTextStyle}>Your password</Text>
					</View>
					<View style={styles.textInputContainer}>
						<Mytextinput
						  style={styles.textInputStyle}
						  onChangeText={(text) => this.setState({ text })}
                  		  secureTextEntry={this.state.hidePassword}
							//keyboardType={'visible-password'} 
						/>
					</View>
					<View style={styles.passwordMainContainer}>
						<View style={styles.showPasswordContainer}>
							<TouchableOpacity style={styles.showHidepassword} onPress={this.managePasswordVisibility}>
								<View>
								<Image
									source={
										this.state.hidePassword
											? require("../../../assets/checkbox_border.png")
											: require("../../../assets/checkbox.png")
									}
									/>
								</View>
								<View>
									
									<Text style={styles.showPasswordTextStyle}>Show password</Text>
									</View>
							</TouchableOpacity>
						</View>
						<View style={styles.forgotPasswordContainer}>
							<TouchableOpacity>
								<Text style={styles.forgotPasswordTextStyle}>Forgot password</Text>
							</TouchableOpacity>
						</View>
					</View>
				</LinearGradient>
			</View>

		);
	}
}

export default index;
