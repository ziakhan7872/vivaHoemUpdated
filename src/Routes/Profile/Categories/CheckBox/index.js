import React, { Component, useState } from 'react';
import {
	Text,
	View,
	ScrollView,
	Dimensions,
	ImageBackground,
	StyleSheet,
	Image,
	StatusBar,
	TouchableOpacity,
	CheckBox
} from 'react-native';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
// import styles from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
// class index extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
//             isSelected: ''
//         };
// 	}
// 	render() {
// 		return (
//             <View>
//                 <View style={styles.ComponentView}>
//                     <Text style={styles.ApplianceText}>Applinace Repair</Text>
//                     <TouchableOpacity style={styles.Removebutton }>
//                          <Text style={{fontSize: RFValue(15), alignSelf:'center', color: 'gray'}}>REMOVE</Text>
//                     </TouchableOpacity>
//                     <View style={styles.checkboxContainer}>
//         <CheckBox
//           value={this.state.isSelected}
//           onValueChange={setSelection}
//           style={styles.checkbox}
//         />
//         <Text style={styles.label}>Do you like React Native?</Text>
//       </View>
//                 </View>
//             </View>
// 		);
// 	}
// }

const index = () => {
	const [ isSelected, setSelection ] = useState(false);

	return (
		<View>
			<View style={styles.ComponentView}>
				<Text style={styles.ApplianceText}>Applinace Repair</Text>
				<TouchableOpacity style={styles.Removebutton}>
					<Text style={{ fontSize: RFValue(15), alignSelf: 'center', color: 'gray' }}>REMOVE</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.checkboxContainer}>
				<CheckBox  value={isSelected} onValueChange={setSelection} style={styles.checkbox} color="blue" />
				<Text style={styles.label}>Appliance (Major Electric Appliance)- Install or Repair</Text>
			</View>
            <View style={styles.checkboxContainer}>
				<CheckBox  value={isSelected} onValueChange={setSelection} style={styles.checkbox} color="blue" />
				<Text style={styles.label}>Appliance (All Type)</Text>
			</View>

		</View>
	);
};

export default index;

const styles = StyleSheet.create({
	ComponentView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: Height * 0.29,
		marginHorizontal: Width * 0.05,
        backgroundColor: 'white'
	},
	ApplianceText: {
		fontSize: RFValue(19),
		fontWeight: 'bold'
	},
	Removebutton: {
		borderRadius: 10,
		borderWidth: 1,
		width: Width * 0.21,
		justifyContent: 'center',
		borderColor: 'gray',
        backgroundColor: 'white'
	},
	checkboxContainer: {
		flexDirection: 'row',
		marginBottom: 20,
        width: Width* 0.8,
        paddingLeft: Width*0.06
        ,
        backgroundColor: 'white'
	},
	checkbox: {
		alignSelf: 'center'
	},
	label: {
		margin: 8
	}
});
