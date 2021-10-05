import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useForm, Controller } from "react-hook-form";

export default function BiometricsScreen({ navigation }) {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [age, setAge] = useState(0);
    const [sex, setSex] = useState('');
    const [activity, setActivity] = useState('');

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        {label: 'Male', value: 'male'},
        {label: 'Female', value: 'female'}
    ]);

    const { handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
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
                            <DropDownPicker
                            style={{
                                backgroundColor: "#211E8C"
                              }}
                              containerStyle={{
                                width: '40%', 
                            }}
                            textStyle={{
                                fontSize: 15, color: 'white'
                              }}
                              labelStyle={{
                                fontWeight: "bold",
                                backgroundColor: "#211E8C"
                              }}
                              zIndex={1000}
                                open={open}
                                items={items}
                                value={value}
                                setOpen={setOpen}
                                setValue={onChange}
                                setItems={setItems}
                            />
                        )}
                        name="sex"
                        rules={{ required: true }}
                    />
                </View>

                <View style = {{marginTop: '10%', width: '50%'}}>
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
        backgroundColor: 'gray',
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
    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        width: 100
    },
    sexDropdown: {
        backgroundColor: '#211E8C',
        color: 'white',
        width: '40%',
        paddingLeft: 10,
    }
  });