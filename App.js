
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import Discover from './src/screens/List';
import AddQuestion from './src/screens/AddQuestion';
import Profil from './src/screens/Profil';


import Loading from './src/Log/Loading'
import SignUp from './src/Log/SignUp'
import Login from './src/Log/Login'
import Main from './src/Log/Main'
import ReponseScreen from './src/screens/ReponseComponent'
import ResultScreen from './src/screens/ResultScreen'



const AppNavigator = createStackNavigator(
      {

        Home,
        AddItem,
        ReponseScreen,
        ResultScreen,

        AddQuestion,
        Profil,
        Discover,


        Loading,
        SignUp,
        Login,
        Main



      },
  {
    initialRouteName: 'Main'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

//export default App
