/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login  from '../login/Login';
import Me  from '../me/Me.js';
import {TabBar, Icon, SearchBar, List, NavBar, DatePicker, InputItem} from 'antd-mobile';

export default class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'yellowTab',
            hidden: false,
            open: true,
        };
    }

    renderContent(pageText) {
        return (<View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
            <SearchBar placeholder="搜索" showCancelButton/>
            <Text style={{margin: 50}}>{pageText}</Text>
        </View>);
    }

    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }

    render() {
        return (
            <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="#ccc">
                <TabBar.Item title="生活" icon={require('./alipay.png')} selectedIcon={require('./alipay.png')}
                             selected={this.state.selectedTab === 'blueTab'}
                             onPress={() => this.onChangeTab('blueTab')}>
                    {this.renderContent('生活 Tab')}
                </TabBar.Item>
                <TabBar.Item icon={require('./alipay.png')} selectedIcon={require('./alipay.png')} title="口碑" badge={2}
                             selected={this.state.selectedTab === 'redTab'} onPress={() => this.onChangeTab('redTab')}>
                    {this.renderContent('口碑 Tab')}
                </TabBar.Item>
                <TabBar.Item icon={require('./alipay.png')} selectedIcon={require('./alipay.png')} title="我的"
                             selected={this.state.selectedTab === 'greenTab'}
                             onPress={() => this.onChangeTab('greenTab')}>
                    <Me></Me>
                </TabBar.Item>
                <TabBar.Item icon={require('./alipay.png')} selectedIcon={require('./alipay.png')} title="登录"
                             selected={this.state.selectedTab === 'yellowTab'}
                             onPress={() => this.onChangeTab('yellowTab')}>
                    <Login></Login>
                </TabBar.Item>
            </TabBar>
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

