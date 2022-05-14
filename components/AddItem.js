import React, {useState} from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'; 
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const AddItem = ({title, addItem}) => {
    const [text, setText] = useState(''); 
    const onChange = textValue => setText(textValue)
  return(
    <View>
        <TextInput placeholder='Add task' style = {styles.input} onChangeText = {(value)=>onChange(value)}/>
        <TouchableOpacity style ={styles.btn} onPress = {() => addItem(text)} >
            <Text style = {styles.btnText}> <Icon name = "plus" size = {20}/> Add Task</Text>
        </TouchableOpacity>
    </View>
  );
}; 


const styles = StyleSheet.create({
    input:{
        height: 60, 
        padding: 8, 
        fontSize: 16,
    }, 
    btn: {
        backgroundColor: '#6495ED',
        padding: 10, 
        
    }, 
    btnText: {
        color: 'black', 
        fontSize: 20,
        textAlign: 'center'
    }
});

export default AddItem;
