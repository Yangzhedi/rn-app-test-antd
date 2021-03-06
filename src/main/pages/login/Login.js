/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from "react";
import {AsyncStorage, StyleSheet, Text, View} from "react-native";
import {Button, Icon, SearchBar, List, NavBar, DatePicker, InputItem} from "antd-mobile";
import Global from "util/global.js";
// import { Button } from 'antd-mobile';
import accountService from 'services/account.js';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: ''
        };
        this.login = this.login.bind(this);
    }

    login() {
        const { navigate } = this.props.navigation;
            accountService.login(null,{
                username: '13120024922',//this.state.phone.replace(/\s/g, ''),
                password:'12345', // this.state.password,
                rememberMe: true
            })
            .then((response) => {
                console.log(response);
                AsyncStorage.setItem('id_token', response.id_token);// (error) => console.log(error)
                Global.token = response.id_token;
                navigate('Me');
            })
            .catch((err)=> {
                console.log(err);
                //TODO 登录失败的处理
            })
    }

    render() {
        return (
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
