/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, Text, View, Image} from 'react-native';
import {Button, Icon, Modal, List, NavBar, DatePicker, InputItem} from 'antd-mobile';
import accountService from 'services/account.js';
import personService from 'services/bsb-person.js';
import Global from 'util/global.js';

export default class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar:'',
            person:{},
            logedIn:false,
            rendered: true
        };
        this.onButtonClick = this.onButtonClick.bind(this)
    }
    componentWillMount(){
        console.log('componentWillMount')
        accountService.getAccount().then((response)=>{
            console.log(response);
            this.setState({
                logedIn:true,
                person:response
            })
        })
            .catch((err)=>{
                console.log(err);
            })
        personService.getPersonInfo().then((response)=>{
            console.log(response);
            this.setState({
                avatar:response.avatarUrl
            })
        })
            .catch((err)=>{
                console.log(err);
            })
    }

    onButtonClick(){
        const { navigate } = this.props.navigation;
        Modal.alert('标题', ('确定要退出登录？'), [
            { text: 'OK', onPress: () => {
                AsyncStorage.removeItem('id_token');
                Global.token = null;
                this.setState({logedIn:false,person:{}})
                navigate('Test1');
            }, style: 'cancel' },
            { text: 'Cancel', onPress: () => console.log('cancel') }
        ]);
    };
    render() {
        console.log(Global.token);
        AsyncStorage.getItem('id_token',
            (err,result) => {
                console.log(result);
            })
        let loginPage = (
            <View>
            <Text>me</Text>
            <Text>{this.state.person.nickName}</Text>
            <Text>{this.state.person.login}</Text>
            <Button onClick={()=>{
                const { navigate } = this.props.navigation;
                navigate('Login');
            }}>
            滚去登录
            </Button>
            </View>
        );
        let mePage = (
            <View>
            <Text>{this.state.person.nickName}</Text>
            <Text>{this.state.person.login}</Text>
            <Text>{this.state.avatar}</Text>
            <Image style={{width: 400, height: 400}}
            source={{uri:this.state.avatar}}/>
            <Button type="warning" onClick={this.onButtonClick}>退出登录</Button>
            <Button onClick={()=>{
                this.setState({
                    rendered:!this.state.rendered
                })
            }}>刷新页面测试</Button>
            <Text>{this.state.rendered + ''}</Text>
            </View>
        );
        return this.state.logedIn ? mePage : loginPage;
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
