import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, AlertIOS } from 'react-native';
import { LinearGradient } from 'expo'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#4ccafd' , '#d85afb']}
          start={[0,0]}
          end={[1,1]}
          style={{ padding: 15, flex: 1}}>

          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 30, color: 'white'}}>This is you Home page !</Text>
          </View>

          <View style={{borderColor: '#000000', borderWidth: 2, flex: 2, margin: 10, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'white'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddQuestion')}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 25, color: 'white'}}>Create a question</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1}}></View>


          <View style={{borderColor: '#000000', borderWidth: 2, flex: 2, margin: 10, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'white'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profil')}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 25, color: 'white'}}>Profil</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1}}></View>

          <View style={{borderColor: '#000000', borderWidth: 2, flex: 2, margin: 10, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'white'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Discover')}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 25, color: 'white'}}>Discover</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1}}></View>

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
