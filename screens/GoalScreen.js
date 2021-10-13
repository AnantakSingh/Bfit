import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button } from 'react-native';

export default function GoalScreen({ navigation }) {
    const [number, onChangeNumber] = React.useState(null);

    const onSubmit = (message) => {
        alert(message);
        navigation.navigate('Home');
    }

    return(
        <SafeAreaView style = {styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>CHOOSE GOAL</Text>
            </View>

            <View style={styles.goalContainer}>
            <TextInput
                    style={styles.goal}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="GOAL WEIGHT"
                    placeholderTextColor='white'
                    keyboardType="numeric"
                    textAlign="center"
                />
            </View>
                
            <View style={styles.submitContainer}>
                <TouchableHighlight style = {styles.submitButton} onPress = {() => onSubmit("LET'S MAINTAIN YOUR WEIGHT!")}>
                    <Text style = {styles.buttonText}>MAINTAIN</Text>
                </TouchableHighlight>
                <TouchableHighlight style = {styles.submitButton} onPress = {() => onSubmit("LET'S LOSE SOME WEIGHT!")}>
                    <Text style = {styles.buttonText}>LOSE 0.25 KG PER WEEK</Text>
                </TouchableHighlight>
                <TouchableHighlight style = {styles.submitButton} onPress = {() => onSubmit("LET'S LOSE SOME WEIGHT!")}>
                    <Text style = {styles.buttonText}>LOSE 0.5 KG PER WEEK</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      padding: 10,
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    titleContainer: {
        marginTop: '10%',
        // backgroundColor: 'red',
        alignItems: 'center',
        height: '15%',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        alignItems: 'center',
        fontSize: 44
    },
    goalContainer: {
        // backgroundColor: 'blue',
        alignItems: 'center',
        height: '15%',
        justifyContent: 'center'
    },
    goal: {
        backgroundColor: '#2B2B2B',
        color:'white',
        height: '50%',
        width: '50%',
        borderRadius: 5,
        fontSize: 25
    },
    submitContainer: {
        // backgroundColor: 'green',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '10%',
        paddingHorizontal: '7%'
    },
    submitButton: {
        height: '20%',
        width: '70%',
        marginTop: '5%',
        marginBottom: '5%',
        backgroundColor: '#090746',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
      }
  });