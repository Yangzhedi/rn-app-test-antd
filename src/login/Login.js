/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';
// import { Button } from 'antd-mobile';
import {Button, Icon, SearchBar, List, NavBar, DatePicker, InputItem} from 'antd-mobile';
import Global from './../util/global.js'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: ''
        };
        this.login = this.login.bind(this);
    }
    login(){
        // fetch
        fetch('https://bisaibang.com/api/authenticate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:this.state.phone,
                password:this.state.password,
                rememberMe: true
            })
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log(response.json());
                    //TODO 登录失败的处理
                }
            })
            .then((response) => {
                    console.log(response);
                    AsyncStorage.setItem('id_token', response.id_token,(error) => console.log(error));
                    Global.token = response.id_token;
            })
            .catch((err)=> {
                console.log(err);
                //TODO 登录失败的处理
            })
    }
    render() {
        let login = (
            <View>
            <Text>me</Text>
            <InputItem clear type="phone" value={this.state.phone} onChange={(value) => {
                this.setState({
                    phone: value,
                });
            }} placeholder="phone">
            手机号
            </InputItem>
            <InputItem clear type="password" value={this.state.password}
            onChange={(value) => {
                this.setState({
                    password: value,
                });
            }} placeholder="password">
            密码
            </InputItem>
            <Button type="primary" onClick={() => this.login()}>Log In</Button>
            </View>
        );
        return login;
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
