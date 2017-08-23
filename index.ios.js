//require('./src/app');
import React, {Component} from "react";
import {AppRegistry, StyleSheet} from "react-native";
import App from "test/app.js";

export default class AwesomeProject extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
