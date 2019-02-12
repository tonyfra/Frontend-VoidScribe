import React from 'react';
import {FlatList, ScrollView, View, Text, TextInput, ListItem, ImageBackground, StyleSheet, } from 'react-native';
import firebase from 'react-native-firebase';
import {Picker, Icon}from "native-base"; 
import Todo from './Todo'; // we'll create this next
import { Button } from 'react-native-elements';
export {categories};
let categories;
export default class Todos extends React.Component {
  
    constructor() {
      super();
      this.ref = firebase.firestore().collection('Algorithm_Requests');
      this.state = {
        textInput: '',
        amountInput: '',
        categories:[],
        tags:[],
        
      };
      
      this.arrayHolder=[];
      this.saveHash;
      count = 0;
        
    }

    onValueChange(value) {
      this.setState({
        selected: value
      });
    }

    updateTextInput(value) {
      //const { currentUser } = firebase.auth()
      this.setState({ textInput: value});
      Textin = this.state.textInput;
    }

    updateAmountInput(value) {
      //const { currentUser } = firebase.auth()
      this.setState({ amountInput: value});
      Amountin = this.state.textInput;
    }

    state = { currentUser: null }
    componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
    }

    ThingsFunc(){
      categories="Things"
      this.props.navigation.navigate('WriteScreen')
    }
    CreaturesFunc(){
        categories="Creatures"
        this.props.navigation.navigate('WriteScreen')
    }
    PlacesFunc(){
        categories="Places"
        this.props.navigation.navigate('WriteScreen')
    }
    IdeasFunc(){
        categories="Ideas"
        this.props.navigation.navigate('WriteScreen')
    }
   

        render() {
        return (
          <ImageBackground source={require('../assets/moon.jpg')} style ={styles.container}>
            <View style={{ flex: 1 }}>
            <Text>{count}</Text>
              <Button
                large
                rounded
                title={'Creatures'}
                backgroundColor={'#C133FF'}
                onPress={() => this.CreaturesFunc()}
              />
              <Text></Text>
              <Button
                large
                rounded
                title={'Ideas'}
                backgroundColor={'#C133FF'}
                onPress={() => this.IdeasFunc()}
              />
              <Text></Text>
              <Button
                large
                rounded
                title={'Places'}
                backgroundColor={'#C133FF'}
                onPress={() => this.PlacesFunc()}
              />
              <Text></Text>
              <Button
              large
              rounded
              title={'Things'}
              backgroundColor={'#C133FF'}
              onPress={() => this.ThingsFunc()}
            />
              <Text></Text>
            </View>
            </ImageBackground>
        );
    }
    
      
}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      logo: {
        height: 120,
        marginBottom: 16,
        marginTop: 64,
        padding: 10,
        width: 135,
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      modules: {
        margin: 20,
      },
      modulesHeader: {
        fontSize: 16,
        marginBottom: 8,
      },
      module: {
        fontSize: 14,
        marginTop: 4,
        textAlign: 'center',
      },
      
    });