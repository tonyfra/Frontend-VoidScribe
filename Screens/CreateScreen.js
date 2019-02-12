import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Icon, Button, Container, Header, Content,
Left} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
      title: 'Story',
    };
    render() {
      let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];
      const {navigate} = this.props.navigation;
      return (
        <View style={{ flex: 1 }}>
        
        
        <Button
          title="Generate"
          onPress={() => navigate('Create')}
        />
        <Dropdown
          label='Favorite Fruit'
          data={data}
        />
        
        </View>
      );
    }
  }