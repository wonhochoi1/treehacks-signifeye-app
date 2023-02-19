import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Vibration, TouchableOpacity} from 'react-native';
import { Tab, Slider } from "@rneui/base";
import { Icon } from '@rneui/themed';
import SplashScreen from '/Users/wonhochoi/Signifeye/SplashScreen.js';
import React, { useEffect } from 'react';
import TwoCircularButtons from './TwoCircularButtons';

export default function App() {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // simulate a 3-second loading time
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Signifeye</Text>
      <StatusBar style="auto" />
      <Tab
        onChange={() => console.log("onChange()")}
        indicatorStyle={{}}
        variant="default">
        <Tab.Item title="User" />
        <Tab.Item title="User Assistant" />
      </Tab>
      <Text style ={styles.padding}>Control Level</Text>
    <Slider
      animateTransitions
      animationType="timing"
      maximumTrackTintColor="#ccc"
      maximumValue={100}
      minimumTrackTintColor="#222"
      minimumValue={0}
      onSlidingComplete={() =>
        console.log("onSlidingComplete()")
      }
      onSlidingStart={() => console.log("onStart()")}
      onValueChange={value => console.log("onChange()")}
      orientation="horizontal"
      step={1}
      style={{ width: "80%", height: 200 }}
      thumbStyle={{ height: 20, width: 20 }}
      thumbProps={{
        children: (
          <Icon
            name="circle"
            type="font-awesome"
            size={20}
            reverse
            containerStyle={{ bottom: 20, right: 20 }}
            color='#2E8BC0'
          />
        )
      }}
      thumbTintColor="#0c0"
      thumbTouchSize={{ width: 40, height: 40 }}
      trackStyle={{ height: 10, borderRadius: 20 }}
      value={50}
    />
    <TwoCircularButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    paddingVertical: 10,
    color: '#2E8BC0',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  padding: {
    marginTop: 100,
    marginBottom: -50,
    justifyContent: 'center',
  }
});

