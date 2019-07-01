import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity, TouchableHighlight} from 'react-native-gesture-handler'
import { db } from '../config';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27

let questionRef = db.ref('/questions');

export default class ReponseScreen extends React.Component {
  render() {
      /* 2. Read the params from the navigation state */
  //    const { params } = this.props.navigation.state.params;
  //    const itemId = params ? params.itemId : null;
  //    const otherParam = params ? params.otherParam : null;

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
        </View>
      );
    }
}
const styles = StyleSheet.create({
  questionsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  questiontext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
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
});
