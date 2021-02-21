import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
import styles from './styles';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listingVisits: '2',
			connections: '0',
			website: '',
			phone: '',

		};
	}
	render() {
		return (
			<ScrollView>
				<View style={styles.linecontainer}>
					<View style={styles.lineview} />
					<Text style={styles.lineText}>MONTH-TO-DATE, September</Text>
					<View style={styles.lineview} />
				</View>

				<View style={styles.persentageContainer}>
					<Text style={styles.persentageText}>100%</Text>
				</View>

				<View style={styles.line2Container}>
					<Text style={styles.lineText2}>of your visitor tried to connect with you</Text>
				</View>
				<View style={{marginTop: 15}}></View>

				<View style={styles.container}>
					<Text style={styles.item}>Listing Visits</Text>
					<Text>{this.state.listingVisits}</Text>
				</View>

				<View style={styles.container}>
					<Text style={styles.item}>Connections</Text>
					<Text>{this.state.connections}</Text>
				</View>
                
				<View style={{marginTop: 15}}></View>
				<View style={styles.container}>
					<Text style={styles.item2}>Website</Text>
					<Text>1</Text>
				</View>

				<View style={styles.container}>
					<Text style={styles.item2}>Phone</Text>
					<Text>{this.state.connections}</Text>
				</View>

                <View style={{marginTop: 15}}></View>

				<View style={styles.container}>
					<Text style={styles.item}>Total Leads</Text>
					<Text>{this.state.connections}</Text>
				</View>

				<View style={{marginTop: 15}}></View>
				<View style={styles.container}>
					<Text style={styles.item2}>Profile Leades</Text>
					<Text>1</Text>
				</View>

				<View style={styles.container}>
					<Text style={styles.item2}>Homestar leads</Text>
					<Text>{this.state.connections}</Text>
				</View>

            <View style={{marginTop: 30}}></View>
				<View style={styles.linecontainer}>
					<View style={styles.lineview} />
					<Text style={styles.lineText}>MONTH-TO-DATE, September</Text>
					<View style={styles.lineview} />
				</View>

				<View style={styles.persentageContainer}>
					<Text style={styles.persentageText}>100%</Text>
				</View>

				<View style={styles.line2Container}>
					<Text style={styles.lineText2}>of your visitor tried to connect with you</Text>
				</View>
				<View style={{marginTop: 15}}></View>

				<View style={styles.container}>
					<Text style={styles.item}>Listing Visits</Text>
					<Text>{this.state.listingVisits}</Text>
				</View>

				<View style={styles.container}>
					<Text style={styles.item}>Connections</Text>
					<Text>{this.state.connections}</Text>
				</View>
                
				<View style={{marginTop: 15}}></View>
				<View style={styles.container}>
					<Text style={styles.item2}>Website</Text>
					<Text>1</Text>
				</View>

				<View style={styles.container}>
					<Text style={styles.item2}>Phone</Text>
					<Text>{this.state.connections}</Text>
				</View>

                <View style={{marginTop: 15}}></View>

				<View style={styles.container}>
					<Text style={styles.item}>Total Leads</Text>
					<Text>{this.state.connections}</Text>
				</View>

				<View style={{marginTop: 15}}></View>
				<View style={styles.container}>
					<Text style={styles.item2}>Profile Leades</Text>
					<Text>1</Text>
				</View>

				<View style={styles.container}>
					<Text style={styles.item2}>Homestar leads</Text>
					<Text>{this.state.connections}</Text>
				</View>
                <View style={{marginTop: 30}}></View>
			</ScrollView>
		);
	}
}

export default index;
