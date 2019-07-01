import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, AlertIOS } from 'react-native';
import { LinearGradient } from 'expo'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Profil extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#f8bd75', '#c55084']}
          style={{ padding: 15, flex: 1}}>

          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 30}}>This is you Profil page !</Text>
          </View>
          </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  }
})
