import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';
import {Button, Icon, List, Popup, NavBar, DatePicker, InputItem} from 'antd-mobile';
export default class Tournament extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sel0: '',
            sel1: '',
        };
        this.getPopupContent = this.getPopupContent.bind(this);
        this.showPopup = this.showPopup.bind(this);
    }
    
    componentDidMount(){
        this.props.navigation.setParams({
            headerTitle:'赛事主页',
            navigatePress:this.showPopup,
            tabBarVisible:false
        });
    }
    showPopup(){
        Popup.show(this.getPopupContent(1), {
            maskClosable: true,
            animationType: 'slide-up',
            onMaskClose: () => new Promise(resolve => { setTimeout(resolve, 1000); }),
        });
    }
    onClose(sel, num) {
        this.setState({ [`sel${num}`]: sel });
        Popup.hide();
    }
    getPopupContent(num){
        return (<View>
            <List renderHeader={() => '委托买入'}>
                <List.Item>股票名称</List.Item>
                <List.Item>股票代码</List.Item>
                <List.Item>买入价格</List.Item>
                <List.Item>买入数量</List.Item>
            </List>
            <View style={{ padding: 10 }}>
                <Text style={{ color: 'gray' }}>投资说明投资说明...</Text>
                <Text style={{ color: 'gray' }}>交易金额以实际成交为准</Text>
            </View>
            <View style={{ padding: 6 }}>
                <Button type="primary" onClick={() => this.onClose('cancel', num)}>买入</Button>
            </View>
        </View>);
    }
    render() {
        // console.log(Global.token);
        return (
            <View>
                <Text>Touranment</Text>
                <Button onClick={this.showPopup}>向上弹出效果</Button>
                <Button onClick={()=>{
                    const { navigate } = this.props.navigation;
                    navigate('Tournament1');
                }}>
                    跳转到Tournament1
                </Button>
                
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
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize:18
    },
});
