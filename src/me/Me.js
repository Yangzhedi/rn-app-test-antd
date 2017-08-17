/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';
// import { Button } from 'antd-mobile';
import {Button, Icon, SearchBar, List, NavBar, DatePicker, InputItem} from 'antd-mobile';
import fetcher from '../util/HTTPUtil.js';


export default class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            avatar:''
        };
    }
    componentWillMount(){
        fetcher.get('/account').then((response)=>{
            console.log(response);
            this.setState({
                name: response.nickName
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render() {
        return (
            <View>
            <Text>{this.state.name}</Text>
            </View>
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
    icon1: {
        width: 200,
        height: 200
    },
    icon2: {
        width: 200,
        height: 200
    }
});
