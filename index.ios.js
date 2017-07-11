/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
    AppRegistry, StyleSheet,Navigator,
    Text, View,
    TouchableHighlight, TextInput,TouchableNativeFeedback
} from 'react-native';

import MyScene from './MyScene';


export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this._onPressButton = this._onPressButton.bind(this);
    this._onLongPressButton = this._onLongPressButton.bind(this);
    this.state = {
      buttonText: '1234',
      text: ''
    }
  };
  ComponentWillMount(){
    console.log("我只是单纯的测试一下API");
  };
  _onPressButton() {
    console.log("You tapped the button!" + this.state.buttonText);
    this.setState({
      buttonText:this.state.buttonText+'!'
    })
  };
  _onLongPressButton(){
    console.log("onLongPressButton");
    this.setState({
      buttonText:this.state.buttonText+'1'
    })
    alert('1234')
  }
  render() {
    console.log('re-render'+this.state.buttonText);
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            办一场高效有品质的比赛！
          </Text>
          <TouchableHighlight style={{height: 40,width:70}} onPress={this._onPressButton} onLongPress={this._onLongPressButton}>
            <Text>创建比赛</Text>
          </TouchableHighlight>

          {/*太毒瘤了
           <TouchableNativeFeedback onPress={this._onPressButton} onLongPress={this._onPressButton}>
           <Text>TouchableNativeFeedback</Text>
           </TouchableNativeFeedback>*/}
          <Text>{this.state.buttonText}</Text>
          <View style={{padding: 10}}>
            <TextInput
                style={{height: 40,width:300}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
            />
            <Text style={{padding: 10, fontSize: 42}}>
              {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
          </View>

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
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);