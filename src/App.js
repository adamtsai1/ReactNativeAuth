// Dependencies
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

// App
import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA76-md2fYY3TV0lfC6qIUXdxop9w9OIhc',
            authDomain: 'react-native-auth-816ce.firebaseapp.com',
            databaseURL: 'https://react-native-auth-816ce.firebaseio.com',
            projectId: 'react-native-auth-816ce',
            storageBucket: 'react-native-auth-816ce.appspot.com',
            messagingSenderId: '1098401012721',
        });

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
            
        });
    }

    render() {
        return (
            <View style={{ height: 100}}>
                <Header headerText="Authentication App" />
                {this.renderContent(this)}
            </View>
        );
    }

    logOut() {

    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                );

                break;

            case false:
                return <LoginForm />;
                break;

            default:
                return <Spinner size="large" />
                break;
        }
    }
}

export default App;
