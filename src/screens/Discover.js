import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, AlertIOS } from 'react-native';
import { LinearGradient } from 'expo'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class ReponseScreen extends React.Component {
  render() {
      /* 2. Read the params from the navigation state */
  //    const { params } = this.props.navigation.state.params;
  //    const itemId = params ? params.itemId : null;
  //    const otherParam = params ? params.otherParam : null;

      return (
        <View style={{alignItems: 'center', justifyContent: 'center' }}>

                  <Text>Details Screen</Text>
              //    <Text>itemId: {JSON.stringify(itemId)}</Text>
              //    <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                  <Button
                    title="Go to Details... again"
                //    onPress={() => this.props.navigation.navigate('ReponseScreen')}
                  />
                  <Button
                    title="Go back"
                  //  onPress={() => this.props.navigation.goBack()}
                  />
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
