import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { db } from '../config';
import { LinearGradient } from 'expo'
import { TouchableOpacity, TouchableHighlight} from 'react-native-gesture-handler'

let questionRef = db.ref('/questions');


export default class List extends Component {
  state = {
    question: []
  };
    componentDidMount() {
      let quest = [];
      i = 0;
      questionRef.on('value', snapshot => {
        let data = snapshot.val();
        let questions = Object.values(data);
        for (let question of questions) {
            quest[i] = question;
            i++;
        }
        this.setState({ question:quest });
      });
  }

  render() {
    return (
      <View style={styles.container}>
      <LinearGradient
      colors={['#72eda9', '#4461ed']}
      style={{ padding: 15, flex: 1}}>
        {this.state.question.map((quest, index) => {
             return (
                <View key={index} style={{borderColor: 'white', borderWidth: 1, flex: 1, margin: 3, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableHighlight
                    onPress={() => {this.props.navigation.navigate('ReponseScreen'
                    , {
                          q: quest,
                        });
                      }}


                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, color: 'white'}}>{quest.titre}</Text>
                  </TouchableHighlight>
                </View>
             );
          })
      }
      </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  }
});
