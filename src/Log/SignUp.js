import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'firebase'
import User from '../components/User'
import { LinearGradient } from 'expo'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { db } from '../config';

let sess  = db.ref('/sessions/');

export default class SignUp extends React.Component {
  state = { username: '', password: '', errorMessage: null }
  handleSignUp = () => {
    const { username, password } = this.state
    userId = sess.push().getKey();
    sess.child(userId).set({
       password: password,
       username: username
    });
  this.props.navigation.navigate('Home');
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
            <Text style={{fontSize: 30}}>You can Sing up here !</Text>
          </View>

        <TextInput
          placeholder="Username"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <View style={{borderColor: '#000000', borderWidth: 2, flex: 1, margin: 10, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'white'}}>
          <TouchableOpacity
            onPress={this.handleSignUp}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 30, color: 'white'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={{borderColor: '#000000', borderWidth: 2, flex: 1, margin: 10, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderColor: 'white'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 25, color: 'white'}}>You have an account ?</Text>
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
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    color: 'white',
    borderColor: 'white',
  }
})
