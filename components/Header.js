import React from 'react'; 
import {View, Text, StyleSheet} from 'react-native'; 


const Header = ({title}) => {
  return(
    <View style = {styles.header}>
      <Text style ={styles.text}>{title}</Text>
    </View>
  );
}; 

Header.defaultProps = {
    title: 'To-Do List'
}

const styles = StyleSheet.create({
  header:{
    height: 70,
    padding: 20, 
    backgroundColor: '#6495ED'
},
  text:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default Header;