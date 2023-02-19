import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const TwoCircularButtons = () => {
    return (
        <View style ={styles.container}>
            <TouchableOpacity style ={styles.button}>
                <Text style ={styles.buttonText}>ON</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style ={styles.buttonText}>OFF</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {  
      marginTop: 150,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 5,
      backgroundColor: '#2E8BC0',
      padding: 25,
    },
    button: {
     
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: 'white',
      marginHorizontal: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 15,
    },
  });

  export default TwoCircularButtons;
  