// Dependencies
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

// App
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA76-md2fYY3TV0lfC6qIUXdxop9w9OIhc',
            authDomain: 'react-native-auth-816ce.firebaseapp.com',
            databaseURL: 'https://react-native-auth-816ce.firebaseio.com',
            projectId: 'react-native-auth-816ce',
            storageBucket: 'react-native-auth-816ce.appspot.com',
            messagingSenderId: '1098401012721',
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication App" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
