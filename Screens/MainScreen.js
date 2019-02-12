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
      selected: "pokemon",
      titleText: "Bird's Nest",
      bodyText: 'This is not really a bird nest.'
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }
render() {
    const { currentUser } = this.state
return (
  <ImageBackground source={require('../assets/digital-art.jpg')} style ={styles.container}>
  <View style={ styles.container2 }>
  <Text></Text>
    <Text style={styles.titleText}>Void Scribe</Text>
    </View>
      <View style={ styles.container1 }>
        <Text>
          
        </Text>
        <Button
          large
          rounded
          title="Generate"
          backgroundColor={'#C133FF'}
          onPress={() => this.props.navigation.navigate('ReadScreen')}
        />
        <Button
          large
          rounded
          title="Generate Write"
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
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2: {
    flex: 1,
    alignItems: 'center'
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
})
/*<Text></Text>
          <Picker
              note
              mode="dropdown"
              
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Pokemon" value="pokemon" />
              <Picker.Item label="American Cites" value="americanCites" />
              <Picker.Item label="Animals" value="animals" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        
    
        <Text></Text>
        
        
        <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
        </Text>
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>
      </Text>*/