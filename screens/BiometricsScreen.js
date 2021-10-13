import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import SelectPicker from 'react-native-form-select-picker';
import { useForm, Controller } from "react-hook-form";

export default function BiometricsScreen({ navigation }) {

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        {value: '0', label: 'Little to no exercise'},
        {value: '1', label: 'Exercise less than 3 times a week'},
        {value: '2', label: 'Exercise 4 to 5 days a week'},
        {value: '3', label: 'Exercise daily'},
    ]);
    const options = ["Male", "Female"];

    const { handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        alert("Changes saved");
        navigation.navigate("Home");
    };
    
    console.log('errors', errors);

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.inputContainer}>
                <View style = {styles.inputItem}>
                    <Text style={styles.inputTitle}>HEIGHT: </Text>
                    <Controller
                        control={control}
                        render={({field: { onChange, value }}) => (
                        <TextInput
                            style={styles.inputBox}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                        )}
                        name="height"
                        rules={{ required: true }}
                    />
                </View>
                <View style = {styles.inputItem}>
                    <Text style={styles.inputTitle}>WEIGHT: </Text>
                    <Controller
                        control={control}
                        render={({field: { onChange, value }}) => (
                        <TextInput
                            style={styles.inputBox}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                        )}
                        name="weight"
                        rules={{ required: true }}
                    />
                </View>
                <View style = {styles.inputItem}>
                    <Text style={styles.inputTitle}>AGE: </Text>
                    <Controller
                        control={control}
                        render={({field: { onChange, value }}) => (
                        <TextInput
                            style={styles.inputBox}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                        )}
                        name="age"
                        rules={{ required: true }}
                    />
                </View>
                <View style = {styles.inputItem}>
                    <Text style={styles.inputTitle}>SEX: </Text>
                    <Controller
                        control={control}
                        render={({field: { onChange, value }}) => (
                            <SelectPicker
                                style={styles.sexDropdown}
                                titleText='Select Sex'
                                onSelectedStyle={{fontSize: 16, color:'white'}}
			                    onValueChange={(value) => {
                                    onChange(value);
                                }}
                                selected={value}
                            >
                            {options.map((val, index) => (
                                <SelectPicker.Item label={val} value={val} key={index} />
                            ))}
                        </SelectPicker>
                        )}
                        name="sex"
                        rules={{ required: true }}
                    />
                </View>
                <View style = {[styles.inputItem, {marginTop:20}]}>
                    <Text style={{fontSize: 20, color: 'white',}}>ACTIVITY LEVEL: </Text>
                    <Controller
                        control={control}
                        render={({field: { onChange, value }}) => (
                            <DropDownPicker
                                style={{height: 30, zIndex:-1}}
                                containerStyle={styles.activityLevelDropdown}
                                placeholder=''
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={onChange}
                                setItems={setItems}
                                labelProps={{
                                    numberOfLines: 1
                                }}
                                arrowIconContainerStyle={{borderLeftWidth: 1, borderLeftColor: 'black', paddingLeft:3, }}
                                itemSeparator={true}
                                listItemContainerStyle={{ height: 60}}
                            />
                        )}
                        name="activity"
                        rules={{ required: true }}
                    />   
                </View>

                <View style = {{marginTop: '10%', width: '50%', zIndex: -1}}>
                    <Button
                        color = '#ec5990'
                        style = {styles.button}
                        title="SAVE"
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>
            </View>

            <View>
            
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
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '20%',
    },
    inputItem: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginVertical: '2%',
        paddingRight: '15%',
    },
    inputTitle: {
        fontSize: 30,
        color: 'white',
    },
    inputBox: {
        backgroundColor: '#211E8C',
        borderRadius: 5,
        color: 'white',
        width: '40%',
        paddingLeft: 10,
        fontSize: 16,
    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        width: 100,
        borderRadius: 10
    },
    sexDropdown: {
        backgroundColor: '#211E8C',
        color: 'white',
        width: '40%',
        paddingLeft: 10,
        borderRadius: 5,
    },
    activityLevelDropdown: {
        width: '40%',
        height: '5%',
        borderRadius: 5,
    }
  });