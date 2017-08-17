/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    AsyncStorage, AppRegistry, StyleSheet,Navigator,
    Text, View,
    TouchableHighlight, TextInput,TouchableNativeFeedback
} from 'react-native';
// import { Button } from 'antd-mobile';
import { TabBar, Icon, SearchBar, List, NavBar, DatePicker,InputItem } from 'antd-mobile';
import MenuBar from './components/MenuBar';
import Global from './util/global.js';

export default class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderContent(pageText) {
        return (<View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
            <SearchBar placeholder="搜索" showCancelButton/>
            <Text style={{ margin: 50 }}>{pageText}</Text>
            </View>);
    }
    componentWillMount(){
        AsyncStorage.getItem('id_token',
            (err,result) => {
                console.log(result);
                Global.token = result;
            })
    }
    render() {
        return (
            <MenuBar></MenuBar>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        fontSize: 10,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    icon1:{
        width: 200,
        height: 200
    },
    icon2: {
        width: 200,
        height: 200
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
