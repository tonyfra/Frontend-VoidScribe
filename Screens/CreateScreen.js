import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Icon, Button, Container, Header, Content,
Left} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
      title: 'Story',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <ModalDropdown options={['option 1', 'option 2']}>
        </ModalDropdown>
        <Button
          title="Generate"
          onPress={() => navigate('Create')}
        />
        
      );
    }
  }