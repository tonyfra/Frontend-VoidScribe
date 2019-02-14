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
          <ImageBackground source={require('../assets/backdropBlue.jpg')} style ={styles.container}>
          <View style={ styles.container2 }>
            <Text></Text>
            <Text style={styles.titleText}>Select a Category</Text>
          </View>
            <View style={ styles.container1}>
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
      container1: {
        
        justifyContent: 'center',
        
      },
      container2: {
        flex: 1,
        alignItems: 'center'
      },
      titleText: {
        flex: 1,
        fontFamily: 'Cochin',
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
      },
     
      
    });