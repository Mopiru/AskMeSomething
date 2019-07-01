import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity, TouchableHighlight} from 'react-native-gesture-handler'
import { db } from '../config';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27
import CheckBox from 'react-native-check-box'
import { LinearGradient } from 'expo'



let questionRef = db.ref('/questions');


export default class ResultScreen extends React.Component {


    render() {
      /* 2. Read the params from the navigation state */

      const { params } = this.props.navigation.state
      q = params ? params.val: "coucou"
      const titre  = q[1]
      const rep = q[0]

      all = rep.rep1.num + rep.rep2.num + rep.rep3.num + rep.rep4.num + rep.rep5.num

            rep1 = rep.rep1.num != 0 ? ((rep.rep1.num / all) * 100) : 0
            rep2 = rep.rep2.num != 0 ? ((rep.rep2.num / all) * 100) : 0
            rep3 = rep.rep3.num != 0 ? ((rep.rep3.num / all) * 100) : 0
            rep4 = rep.rep4.num != 0 ? ((rep.rep4.num / all) * 100) : 0
            rep5 = rep.rep5.num != 0 ? ((rep.rep5.num / all) * 100) : 0


      return (
          <View style={{flex: 1}}>

          <LinearGradient
            colors={['#4ccafd' , '#d85afb']}
            start={[0,0]}
            end={[1,1]}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>


        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


                    <Text style={{flex: 1, fontSize: 30, color: 'white'}} > {titre} </Text>

          <View style={styles.view_rep}>

            <Text style={{color: 'white'}} >{rep.rep1.titre}     {rep1} %</Text>
          </View>

          <View style={styles.view_rep}>

            <Text style={{color: 'white'}} >{rep.rep2.titre}     {rep2} %</Text>
          </View>

          <View style={styles.view_rep}>

            <Text style={{color: 'white'}} >{rep.rep3.titre}     {rep3} %</Text>
          </View>

          <View style={styles.view_rep}>

            <Text style={{color: 'white'}} >{rep.rep4.titre}     {rep4} %</Text>
          </View>

          <View style={styles.view_rep}>

            <Text style={{color: 'white'}} >{rep.rep5.titre}     {rep5} %</Text>
          </View>

          <Button
            title="Go back"
            onPress={() => this.props.navigation.navigate('Discover')}
          />
          </View>
          </LinearGradient>
        </View>
      );
    }
}
const styles = StyleSheet.create({
    view_rep: {
      flex: 1,
      flexDirection: 'row',
      fontSize: 20,
      borderColor: '#000000',
      borderWidth: 2,
      margin: 10,
      borderRadius: 50,
      justifyContent: 'space-around',
      alignItems: 'center',
      borderColor: 'white',
      width: 250,
      color: 'white'

    },
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
