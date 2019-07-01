import React from 'react';
import {  Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class BlackFade extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
         <LinearGradient
          colors={['#4ccafd' , '#d85afb']}
          start={[0,0]}
          end={[1,1]}
          style={{ padding: 15, flex: 1}}>

            <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white'}}>Ask Me Something !</Text>
            </View>

            <View style={{borderColor: '#000000', borderWidth: 2, flex: 2, margin: 10, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'white'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'white'}}>Login</Text>
              </TouchableOpacity>
            </View>

            <View style={{borderColor: '#000000', borderWidth: 2, flex: 2, margin: 10, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'white'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'white'}}>SignUp</Text>
              </TouchableOpacity>
            </View>

            <View style={{flex: 4}}>
            </View>

        </LinearGradient>
      </View>
    );
  }
}
