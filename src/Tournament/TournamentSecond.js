import React, {Component} from 'react';
import {DeviceEventEmitter , StyleSheet, Text, View} from 'react-native';
// import { Button } from 'antd-mobile';
import {Button, Carousel, List, Toast, NavBar, DatePicker, InputItem} from 'antd-mobile';

function successToast() {
    Toast.success('加载成功!!!', 1);
}
export default class TournamentFirst extends Component {
    constructor(props) {
        super(props);

    }
    onselectedIndexChange(index) {
        /* tslint:disable: no-console */
        console.log('change to', index);
    }
    componentDidMount() {
        DeviceEventEmitter.addListener('navigatorBack', () => {
            Toast.hide();
        });
    }
    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners('navigatorBack');
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
    render() {
        // console.log(Global.token);
        return (
            <View>
                <Button type="primary">Touranment-second</Button>
                <Text>这是个走马灯</Text>
                <Carousel style={styles.wrapper} autoplayTimeout={2} selectedIndex={2} autoplay infinite afterChange={this.onselectedIndexChange}>
                    <View style={[styles.container, { backgroundColor: 'red' }]}>
                        <Text>Carousel 1</Text>
                    </View>
                    <View style={[styles.container, , { backgroundColor: 'blue' }]}>
                        <Text>Carousel 2</Text>
                    </View>
                    <View style={[styles.container, { backgroundColor: 'yellow' }]}>
                        <Text>Carousel 3</Text>
                    </View>
                    <View style={[styles.container, { backgroundColor: 'black' }]}>
                        <Text>Carousel 4</Text>
                    </View>
                    <View style={[styles.container, { backgroundColor: '#ccc' }]}>
                        <Text>Carousel 5</Text>
                    </View>
                </Carousel>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
});
