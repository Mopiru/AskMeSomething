import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import { LinearGradient } from 'expo'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { db } from '../config';

let sess  = db.ref('/sessions');

export default class Login extends React.Component {
  state = { username: '', password: '', errorMessage: null }
  handleLogin = () => {
        const { username, password } = this.state
        const nav = this.props.navigation
        connection = false
        key = ""
        pass = ""
        sess.orderByChild('username').equalTo(username).on("value", function(snapshot) {
          key = Object.keys(snapshot.val())[0];
        });
        sess.orderByKey().on("value", function(snapshot){
          snapshot.forEach(function(data) {

              if (data.key == key) {
                  if (password == Object.values(data.val())[0]) {
                            pass = Object.values(data.val())[0]
                              //Alert.alert('connection true');
                            nav.navigate('Home');
                  } else {
                    //Alert.alert('connection false');
                    nav.navigate('Login');
                  }
              }
          });
        });
      }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#4ccafd' , '#d85afb']}
          start={[0,0]}
          end={[1,1]}
          style={{ padding: 15, flex: 1}}>

          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 30, color: 'white'}}>You can login here !</Text>
          </View>

        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />

        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <View style={{borderColor: '#000000', borderWidth: 2, flex: 1, margin: 10, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'white'}}>
          <TouchableOpacity
            onPress={this.handleLogin}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 30, color: 'white'}}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{borderColor: '#000000', borderWidth: 2, flex: 1, margin: 10, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'white'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 25, color: 'white'}}>Don't have an account ?</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 2}}></View>
        </LinearGradient>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderRadius: 10,
    color: 'white',
    height: 40,
    width: '90%',
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 8,
  }
})
