import React from 'react'
import { StyleSheet, Platform, Image, Text, View, ScrollView, ImageBackground  } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import firebase from 'react-native-firebase'
import ModalDropdown from 'react-native-modal-dropdown';
import {Picker} from "native-base";
import { Button } from 'react-native-elements';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  
render() {
return (
  <ImageBackground source={require('../assets/notebook-notepad-paper.jpg')} style ={styles.container}>
    <View style={ styles.container2 }>
    <Text></Text>
    <Text></Text>
    <Text style={styles.titleText}>Void Scribe</Text>
    </View>
      <View style={ styles.container1 }>
        
        <Button
          large
          rounded
          title="Generate Names"
          backgroundColor={'#C133FF'}
          onPress={() => this.props.navigation.navigate('SelectNameCatScreen')}
        />
        <Text></Text>
        <Text></Text>
        
        <Button
          large
          rounded
          title="Generate Prompts"
          backgroundColor={'#C133FF'}
          onPress={() => this.props.navigation.navigate('WriteScreen')}
        />
      </View>
  </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex:3,
    height: '50%',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    flex: 1,
    fontFamily: 'Cochin',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#C133FF',
  },
  buttonStyle:{
    height:'50%'
  }

})