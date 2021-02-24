import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ImageBackground, StyleSheet, Image , StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height; 
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
	
		       <View>
				<LinearGradient
					// Background Linear Gradient
					colors={[ '#722f8c', '#722f8c', '#b062c5' ]}
					style={styles.background}
				>
					<View style={styles.headerView}>
						<View style={styles.headerInnserView}>
							<View style={styles.leftArrowContainerView}>
								<TouchableOpacity>
									<Image
										source={require('../../../../../assets/crossIcons.png')}
										style={styles.leftArrowStyle}
									/>
								</TouchableOpacity>
							
							</View>
							<Text style={{paddingHorizontal: Width * 0.16, fontSize: RFValue(22), color: '#fff'}}>Categories and tasks</Text>
						</View>
					</View>
					<View style={{alignSelf: 'center', marginTop: 40, width: Width*0.7}}>
						<Text style={{color: '#fff'}}>Select the tasks you are able to perform for each category. You will also recive for these tasks.</Text>
					</View>
				</LinearGradient>
				
				</View>

		
		);
	}
}

export default index;


