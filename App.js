import { StatusBar, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './screens/SettingsScreen';
import HelpScreen from './screens/HelpScreen';
import BiometricsScreen from './screens/BiometricsScreen';

const HomeScreen = ({ navigation }) => {
  const [calories, setCalories] = useState(2000);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight style = {styles.settingsButton} onPress = {() => navigation.navigate('Settings')} underlayColor = {'black'}>
        <Image source = {require('./assets/settings.png')} style = {styles.settingsIcon}/>
      </TouchableHighlight>
      <View style = {styles.calorieDisplay}>
        <View
          style = {{
              marginTop: '5%', 
              height: '20%', 
              alignItems: 'center', 
              justifyContent: 'center'}}
        >
        <Text style = {{fontSize: 20, color: 'white'}}>CALORIES AVAILABLE</Text>
        </View>
        <View 
          style = {{
            backgroundColor: '#242424', 
            marginTop: '7%', 
            height: '40%',
            width: '45%',
            borderRadius: 42,
            alignItems: 'center', 
            justifyContent: 'center'}}
        >
          <Text style = {{fontSize: 30, color: 'white'}}>{calories}</Text>
        </View>
      </View>
      <View style = {styles.calorieChange}>
        <TouchableHighlight style = {styles.calorieChangeButton} onPress = {() => navigation.navigate('AddFoodItem')}>
          <Text style = {styles.buttonText}>ADD FOOD ITEM</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.calorieChangeButton} onPress = {() => navigation.navigate('AddActivity')}>
          <Text style = {styles.buttonText}>ADD ACTIVITY</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const AddFoodItemScreen = () => {
  return(
  <View style={styles.container}>
      <Text>AddFoodItem</Text>
    </View>
  );
}

const AddActivityScreen = () => {
  return(
  <View style={styles.container}>
      <Text>AddActivity</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options = {{headerShown: false}}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options = {{headerShown: false}}/>
        <Stack.Screen name="AddFoodItem" component={AddFoodItemScreen} options = {{headerShown: false}}/>
        <Stack.Screen name="AddActivity" component={AddActivityScreen} options = {{headerShown: false}}/>
        <Stack.Screen name="Help" component={HelpScreen} options = {{headerShown: false}}/>
        <Stack.Screen name="Biometrics" component={BiometricsScreen} options = {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  settingsIcon: {
    height: 50,
    width: 50,
  },
  settingsButton: {
  },
  calorieDisplay: {
    marginTop: '2.5%',
    height: '25%',
    alignItems: 'center',
  },
  calorieChange: {
    marginTop: '2%',
    height: '40%',
    alignItems: 'center',
  },
  calorieChangeButton: {
    height: '25%',
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
    fontSize: 32,
  }
});