import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from "./styles";

export default class index extends Component
{
    render()
    {
        this.state = {
            title: ''
        }
        return (
            <View>
                <View>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Title"
                        placeholderTextColor="#000"
                        autoCapitalize="none"
                        onChangeText={title => this.setState({ title })}
                    />

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter template body here"
                        placeholderTextColor="#000"
                        autoCapitalize="none"
                        multiline={true}
                        onChangeText={title => this.setState({ title })}
                    />
                </View>

                <View style={styles.submitButtonContainer}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => alert('hi click')
                        }>
                        <Text style={styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
