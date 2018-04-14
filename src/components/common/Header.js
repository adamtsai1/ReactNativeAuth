// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        elevation: 2,
        height: 60,
        justifyContent: 'center',
        paddingTop: 15,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
};

// Make the component available to other parts of the app
export { Header };
