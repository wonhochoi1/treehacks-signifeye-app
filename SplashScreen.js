import { defaultSpacing } from '@rneui/base';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SplashScreen = () => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          }).start();
        }, 3000);
      });
    }, [fadeAnim]);

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Signifeye</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2E8BC0',
      justifyContent: 'center',
      alignItems: 'center',
    
    },
    title: {
        marginTop: 10,
        paddingVertical: 10,
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    },
});

export default SplashScreen;