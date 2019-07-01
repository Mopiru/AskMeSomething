import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet, TextInput, Alert } from 'react-native';
import { db } from '../config';
import { LinearGradient } from 'expo'
import question from '../components/question'


let sess  = db.ref('/questions');

export default class AddItem extends Component {

    state = {question : "", ans1 : "", ans2 : "", ans3 : "", ans4 : "", ans5 : ""}

    handleSubmit = () => {
        const {question, ans1, ans2, ans3, ans4, ans5} = this.state
        anss = []
        anss[0] = ""
        anss[1] = ans1
        anss[2] = ans2
        anss[3] = ans3
        anss[4] = ans4
        anss[5] = ans5
      if (question != "" && ans1 != "" && ans2 != "") {
        Alert.alert(question);

        questId = sess.push().getKey();
        sess.child(questId).set({
           titre: question,
           reponses: ""
        });
        sess.child(questId).child("reponses").set({
          rep1:"",
          rep2:"",
          rep3:"",
          rep4:"",
          rep5:"",
        });

        for (i = 1; i <= 5; i++) {
          sess.child(questId).child("reponses").child("rep" + i).set({
            num:0,
            titre:anss[i],
            geoPos:""
          });
          sess.child(questId).child("reponses").child("rep" + i).child("geoPos").set({
            latitude:0.,
            longitude:0.,
          });
        }

      } else
        Alert.alert("fill question, answer 1 and 2");
    };
  render() {
    return (
      <View style={styles.main}>
          <LinearGradient
            colors={['#e66465' , '#395fe9']}
            style={{ padding: 15, flex: 1}}>

                <TextInput style={styles.itemQuestion}
                placeholder="Question"
                onChangeText={question => this.setState({question})}
                value={this.state.question}/>
                <TextInput style={styles.itemAns} placeholder="Answer 1" onChangeText={ans1 => this.setState({ans1})} value={this.state.ans1}/>
                <TextInput style={styles.itemAns} placeholder="Answer 2" onChangeText={ans2 => this.setState({ans2})} value={this.state.ans2}/>
                <TextInput style={styles.itemAns} placeholder="Answer 3" onChangeText={ans3 => this.setState({ans3})} value={this.state.ans3}/>
                <TextInput style={styles.itemAns} placeholder="Answer 4" onChangeText={ans4 => this.setState({ans4})} value={this.state.ans4}/>
                <TextInput style={styles.itemAns} placeholder="Answer 5" onChangeText={ans5 => this.setState({ans5})} value={this.state.ans5}/>
                <TouchableHighlight style={styles.button} underlayColor="white" onPress={this.handleSubmit}>
                  <Text style={styles.buttonText}>Ask</Text>
                </TouchableHighlight>

          </LinearGradient>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  /*itemAns: {
    height: 50,
    marginTop : 10,
    marginRight : 40,
    marginLeft : 40,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
},*/
  itemAns : {
      borderColor: 'white',
      borderWidth: 1,
      flex: 2,
      margin: 10,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
  },
  itemQuestion: {
    height: 100,
    marginBottom : 15,
    fontSize: 30,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    borderWidth: 2,
    color: 'white',
    textAlign: 'center'
},
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
