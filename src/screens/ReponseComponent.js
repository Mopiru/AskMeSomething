import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity, TouchableHighlight} from 'react-native-gesture-handler'
import { db } from '../config';
import { LinearGradient } from 'expo'
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27
import CheckBox from 'react-native-check-box'

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

let latitude = -1
let longitude = -1

async function getLocationAsync() {
  const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === 'granted') {
    let data = await Location.getCurrentPositionAsync();
    console.log(data);   
    
    latitude = data.coords.latitude
    longitude = data.coords.longitude

    console.log("longitude= " + longitude);
    console.log("latitude= " + latitude);
    /*
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(data),
    })
    */
    
    return data;
  } else {
    throw new Error('Location permission not granted');
  }
}

let questionRef = db.ref('/questions');


export default class ReponseScreen extends React.Component {
  componentDidMount(){
    getLocationAsync();
    
  }

        state = {
            isChecked: false,
            isChecked1: false,
            isChecked2: false,
            isChecked3: false,
            isChecked4: false
        }

         q = []
        showAnswers() {
          const {   isChecked,
            isChecked1,
            isChecked2,
            isChecked3,
            isChecked4 } = this.state
          key = "";
          const titre  = q.titre
          const rep = q.reponses
          newNum = 0
          resultToSend = ""

          const nav = this.props.navigation

          if (titre != undefined) {
            questionRef.orderByChild('titre').equalTo(titre).on("value", function(snapshot) {
              key = Object.keys(snapshot.val())[0];
            });
            questionRef.orderByKey().on("value", function(snapshot){
              snapshot.forEach(function(data) {
                if (data.key == key) {
                  if (isChecked == true){
                    newNum = Object.values(data.val())[0].rep1.num
                    newNum += 1
                    resultToSend = Object.values(data.val())
                  } else if (isChecked1 == true){
                    newNum = Object.values(data.val())[0].rep2.num
                    newNum += 1
                    resultToSend = Object.values(data.val())
                  } else if (isChecked2 == true){
                    newNum = Object.values(data.val())[0].rep3.num
                    newNum += 1
                  } else if (isChecked3 == true){
                    newNum = Object.values(data.val())[0].rep4.num
                    newNum += 1
                    resultToSend = Object.values(data.val())
                  } else if (isChecked4 == true){
                    newNum = Object.values(data.val())[0].rep5.num
                    newNum += 1
                    resultToSend = Object.values(data.val())
                  } else {
                    Alert.alert("You have to check an answers.")
                    nav.navigate('ReponseScreen', {q: q,});
                  }
                }
              });
            });
            if (newNum != 0) {

 
              console.log("longitude= " + longitude);
              console.log("latitude= " + latitude);
                
              if (isChecked == true){

                questionRef.child(key).child("reponses").child("rep1").update({num:newNum});
                questionRef.child(key).child("reponses").child("rep1").child("geoPos").update({
                   latitude:latitude,
                   longitude:longitude,
                 });
                this.props.navigation.navigate('ResultScreen', {val:resultToSend,});
              } else if (isChecked1 == true){
                questionRef.child(key).child("reponses").child("rep2").update({num:newNum});
                  questionRef.child(key).child("reponses").child("rep2").child("geoPos").update({
                    longitude:longitude,
                     latitude:latitude
                   });
                this.props.navigation.navigate('ResultScreen', {val:resultToSend,});
              } else if (isChecked2 == true){
                questionRef.child(key).child("reponses").child("rep3").update({num:newNum});
                  questionRef.child(key).child("reponses").child("rep3").child("geoPos").update({
                    longitude:longitude,
                     latitude:latitude
                   });
                this.props.navigation.navigate('ResultScreen', {val:resultToSend,});
              } else if (isChecked3 == true){
                questionRef.child(key).child("reponses").child("rep4").update({num:newNum});
                  questionRef.child(key).child("reponses").child("rep4").child("geoPos").update({
                    longitude:longitude,
                     latitude:latitude
                   });
                this.props.navigation.navigate('ResultScreen', {val:resultToSend,});
              } else if (isChecked4 == true){
                questionRef.child(key).child("reponses").child("rep5").update({num:newNum});
                  questionRef.child(key).child("reponses").child("rep5").child("geoPos").update({
                    longitude:longitude,
                     latitude:latitude
                   });
                this.props.navigation.navigate('ResultScreen', {val:resultToSend,});
              }
            }
        } else {
          this.props.navigation.navigate('Discover')
        }
      }


    render() {
      /* 2. Read the params from the navigation state */

      const { params } = this.props.navigation.state
      q = params ? params.q : "coucou"
      const titre  = q.titre
      const rep = q.reponses


      return (
        <View style={{ flex: 1}}>
          <LinearGradient
            colors={['#4ccafd' , '#d85afb']}
            start={[0,0]}
            end={[1,1]}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

          <Text style={{flex: 1, fontSize: 30, color: 'white'}} >{titre}</Text>


          <View style={styles.view_rep}>
            <CheckBox
              style={{}}
              onClick={()=>{
                if (this.state.isChecked3 == true || this.state.isChecked1 == true || this.state.isChecked2 == true || this.state.isChecked4 == true ) {
                  Alert.alert("quote just one answer");
                } else {
                  this.setState({isChecked:!this.state.isChecked})
                }
              }}
              isChecked={this.state.isChecked}
              checkedImage={<Image source={require('../../assets/images/check_icon.png')} />}
              unCheckedImage={<Image source={require('../../assets/images/uncheck_icon.png')}/>}
            />
            <Text style={{color: 'white'}} >Réponse 1: {rep.rep1.titre}</Text>
          </View>

          <View style={styles.view_rep}>
            <CheckBox
              style={{}}
              onClick={()=>{
                if (this.state.isChecked == true || this.state.isChecked3 == true || this.state.isChecked2 == true || this.state.isChecked4 == true ) {
                  Alert.alert("quote just one answer");
                } else {
                  this.setState({isChecked1:!this.state.isChecked1})
                }
              }}
              isChecked={this.state.isChecked1}
              checkedImage={<Image source={require('../../assets/images/check_icon.png')} />}
              unCheckedImage={<Image source={require('../../assets/images/uncheck_icon.png')}/>}
            />
            <Text style={{color: 'white'}} >Réponse 2: {rep.rep2.titre}</Text>
          </View>

          <View style={styles.view_rep}>
            <CheckBox
              style={{}}
              onClick={()=>{
                if (this.state.isChecked == true || this.state.isChecked1 == true || this.state.isChecked3 == true || this.state.isChecked4 == true ) {
                  Alert.alert("quote just one answer");
                } else {
                  this.setState({isChecked2:!this.state.isChecked2})
                }
              }}
              isChecked={this.state.isChecked2}
              checkedImage={<Image source={require('../../assets/images/check_icon.png')} />}
              unCheckedImage={<Image source={require('../../assets/images/uncheck_icon.png')}/>}
            />
            <Text style={{color: 'white'}} >Réponse 3: {rep.rep3.titre}</Text>
          </View>

          <View style={styles.view_rep}>
            <CheckBox
              style={{}}
              onClick={()=>{
                if (this.state.isChecked == true || this.state.isChecked1 == true || this.state.isChecked2 == true || this.state.isChecked4 == true ) {
                  Alert.alert("quote just one answer");
                } else {
                  this.setState({isChecked3:!this.state.isChecked3})
                }
              }}
              isChecked={this.state.isChecked3}
              checkedImage={<Image source={require('../../assets/images/check_icon.png')} />}
              unCheckedImage={<Image source={require('../../assets/images/uncheck_icon.png')}/>}
            />
            <Text style={{color: 'white'}} >Réponse 4: {rep.rep4.titre}</Text>
          </View>

          <View style={styles.view_rep}>
            <CheckBox
              style={{}}
              onClick={()=>{
                if (this.state.isChecked == true || this.state.isChecked1 == true || this.state.isChecked2 == true || this.state.isChecked3 == true ) {
                  Alert.alert("quote just one answer");
                } else {
                  this.setState({isChecked4:!this.state.isChecked4})
                }
              }}
              isChecked={this.state.isChecked4}
              checkedImage={<Image source={require('../../assets/images/check_icon.png')} />}
              unCheckedImage={<Image source={require('../../assets/images/uncheck_icon.png')}/>}
            />
            <Text style={{color: 'white'}} >Réponse 5: {rep.rep5.titre}</Text>

          </View>

          <Button
              title="Send and See"
            onPress={() => this.showAnswers()}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.navigate('Discover')}
          />
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
