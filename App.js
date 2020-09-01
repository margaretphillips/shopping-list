import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import Img from './components/Img';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


const App = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Milk' },
    { id: uuidv4(), text: 'Eggs' },
    { id: uuidv4(), text: 'Bread' },
    { id: uuidv4(), text: 'Juice' }
  ]);

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'You need to put in some text', [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
        { cancelable: false })
    } else {
      setItems(prevItems => {
        return [{ id: uuidv4(), text }, ...prevItems]
      })
    }
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) =>
        <ListItem item={item} deleteItem={deleteItem}></ListItem>} />
      <Img />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;