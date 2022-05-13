import React, {useState} from 'react'; 
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native'; 
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import { uuid } from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: 0, text: 'Do Laundry'},
    {id: 1, text: 'Do Classes'}, 
    {id: 2, text: 'Learn React'}, 
    {id: 3, text: 'Sleep'}, 
    {id: 4, text: 'Eat'},  
  ])

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id); 
    }); 
  }

  const addItem = text => {
    if(!text){
      Alert.alert('Error', 'Please enter a task', {text: 'OK'})
    }else{
      setItems(prevItems =>  {
        return [{ text}, ...prevItems]
      })
    }
  }

  return(
    <View style = {styles.container}>
      <Header />
      <AddItem addItem = {addItem}/>
      <FlatList 
        data = {items}
        renderItem = {({item}) => (<ListItem item = {item} deleteItem = {deleteItem} /> )} />
    </View>
  );
}; 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 60
},
});

export default App;