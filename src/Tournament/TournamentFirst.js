import React, {Component} from 'react';
import {DeviceEventEmitter , StyleSheet, Text, View} from 'react-native';
// import { Button } from 'antd-mobile';
import {Button, Popup, List, Toast, NavBar, DatePicker, InputItem} from 'antd-mobile';

function successToast() {
    Toast.success('加载成功!!!', 1);
}
export default class TournamentFirst extends Component {
    constructor(props) {
        super(props);

        this.getPopupContent = this.getPopupContent.bind(this);
        this.showPopup = this.showPopup.bind(this);
    }
    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'TournamentFirst',
        headerRight:(
            <Text style={{color:'red',marginRight:20}} onPress={() => {
                navigation.state.params.navigatePress()
            }}>分享s</Text>
        )
    });
    componentDidMount() {
        DeviceEventEmitter.addListener('navigatorBack', () => {
            Toast.hide();
        });
        this.props.navigation.setParams({
            headerTitle:'赛事主页',
            navigatePress:this.showPopup,
            tabBarVisible:false,
            
        });
    }
    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners('navigatorBack');
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.props.navigation.setParams({
            headerTitle:'Tournament123',
            navigatePress:this.navigatePress,
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
                <Text>Touranment-first</Text>
                <Button onClick={successToast}>成功 toast</Button>
                <Button onClick={()=>{
                    const { navigate } = this.props.navigation;
                    navigate('Tournament2');
                }}>跳转到Tournament2</Button>
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
