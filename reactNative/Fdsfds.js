'use strict';

var React = require('react-native');

var ListView = require('./components/ListView');
var MapView = require('./components/MapView');
var ScrollView = require('./components/ScrollView');
var SliderIOS = require('./components/SliderIOS');
var SwitchIOS = require('./components/SwitchIOS');


var {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = React.createClass({
    render: function() {
        return (
          <View>
            <View style={[styles.view1]}>
                <Text 
                	style={[styles.view1Navbar3]}>
                	My Cool App
                </Text>
            </View>
            <View >
                <ScrollView 
                dataSource={['http://www.viralnovelty.net/wp-content/uploads/2014/07/121.jpg', 'http://imgscenter.com/images/2014/09/13/Beauty-of-nature-random-4884759-1280-800.jpg', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShVpqAWrvxn8f2-XGo0ES0XP555GrVnU83y4v5kxBg8wOK9m1E']}
                style={[styles.view2Scrollview5]}>
                </ScrollView>
            </View>
            <View style={[styles.view4]}>
                <SwitchIOS 
                	style={[styles.view7Switchios9]}>
                </SwitchIOS>
                <ListView 
                dataSource={['Lorem ipsum dolor sit amet', 'Proin tempus volutpat lectus', 'Praesent in orci scelerisque']}
                style={[styles.view4Listview6]}>
                </ListView>
            </View>
            <View style={[styles.view7]}>
                <ListView 
                dataSource={['Lorem ipsum dolor sit amet', 'Proin tempus volutpat lectus', 'Praesent in orci scelerisque']}
                style={[styles.view7Listview8]}>
                </ListView>
            </View>
          </View>
        );
    }
})


var styles = StyleSheet.create({
      view1:{
      }, 
      view1Navbar3:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 39,
          paddingBottom: 39,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 20,
          marginBottom: 0,
          fontSize: 17,
          textAlign: 'center',
          backgroundColor: '#80ff88',
          color: '#ff5a5a',
          width: 375,
          height: NaN,
      }, 
      view2Scrollview5:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          backgroundColor: '#00fa92',
          width: 375,
      }, 
      view4Listview6:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          textAlign: 'center',
          backgroundColor: '#00fa92',
          width: 234.375,
      }, 
      view7:{
      }, 
      view7Listview8:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          width: 375,
          height: 265,
      }, 
      view7Switchios9:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 234.375,
      }, 
      view10:{
          height: NaN,
      }, 
      view10Tabbarios11:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
      }, 
      view4:{
          flexDirection: 'row',
      }, 
})

AppRegistry.registerComponent('reactNative', () => reactNative);

