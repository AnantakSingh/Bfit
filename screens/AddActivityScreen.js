import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SearchBar } from "react-native-elements";

export default function AddActivityScreen({ navigation }) {
    const [search, setSearch] = useState('');
    const [data, setData] = useState(DATA);

    const searchFunction = (text) => {
        const updatedData = DATA.filter((item) => {
          const item_data = `${item.title.toUpperCase()})`;
          const text_data = text.toUpperCase();
          return item_data.indexOf(text_data) > -1;
        });
        setSearch(text);
        setData(updatedData);
    };

    const onPressItem = (title) => {
        alert(`Added ${title}`);
        setSearch('');
        setData([]);
    }
    const renderItem = ({ item }) => <Item title={item.title} />;
    const Item = ({ title }) => {
        return (
          <View style={styles.item}>
            <TouchableOpacity
                onPress={() => onPressItem(title)}
            >
                <Text style={styles.itemText}>{title}</Text>
            </TouchableOpacity>
          </View>
        );
      };

      
    return(
        <View style={styles.container}>
            <SearchBar
                placeholder="ADD ITEM"
                darkTheme
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarInputContainer}
                inputStyle={styles.searchInput}
                value={search}
                onChangeText={(text) => searchFunction(text)}
                autoCorrect={false}
            />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    item: {
        marginTop: 30,
        marginHorizontal: 16,
    },
    itemText: {
        color: 'white',
        fontSize: 20
    },
    searchBarContainer :{
          padding: 0,
          borderRadius: 10,
          height: 75,
    },
    searchBarInputContainer :{
        padding: 0,
        borderRadius: 10,
        height: '100%',
    },
    searchInput: {
        fontSize: 20,
        color: 'white'
    },
  });

const DATA = [
    { id: '1', title: 'Running' },
    { id: '2', title: 'Skipping' },
    { id: '3', title: 'Push-ups' },
    { id: '4', title: 'Pull-ups' },
    { id: '5', title: 'Running' },
    { id: '6', title: 'Skipping' },
    { id: '7', title: 'Push-ups' },
    { id: '8', title: 'Pull-ups' },
    { id: '9', title: 'Running' },
    { id: '10', title: 'Skipping' },
    { id: '11', title: 'Push-ups' },
    { id: '12', title: 'Pull-ups' },
    { id: '13', title: 'Running' },
    { id: '14', title: 'Skipping' },
    { id: '15', title: 'Push-ups' },
    { id: '16', title: 'Pull-ups' },
];