import React from 'react';
import {FlatList, ScrollView, View, Text, TextInput, ListItem, ImageBackground, StyleSheet, } from 'react-native';
import firebase from 'react-native-firebase';
import {Picker,Spinner} from "native-base"; 
import Todo from './Todo'; // we'll create this next
import { Button, } from 'react-native-elements';
import {Hash_Key1,Textin,Amountin} from './WriteScreen';
let Ultimate_key;
let fake;
let count;
export default class Todos extends React.Component {
  
    constructor() {
      super();
      this.ref = firebase.firestore().collection('Algorithm_Requests');
      this.state = {
        textInput: '',
        amountInput: '',
        todos: [],
        selectedText: "pokemon",
        selectedAmount: "5",
        loaded: false,
        hash_hash:Hash_Key1,
        counted:0
      };
      this.arrayHolder=[];
      this.saveHash = Hash_Key1;
      Ultimate_key = Hash_Key1; 
      fake = "you suck"
      count=0;
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

    updateTextInput(value) {
      //const { currentUser } = firebase.auth()
      this.setState({ textInput: value});
    }
    updateAmountInput(value) {
      //const { currentUser } = firebase.auth()
      this.setState({ amountInput: value});
    }
    addRead=()=>{
    hasharray=[];
    firebase.firestore()
    .collection('Completed_Requests')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if (doc && doc.exists) {
          const { Processed_Request, Hash_Key} = doc.data();
          if (Hash_Key == this.state.hash_hash){
          
            fake = "it worked";
            this.state.counted = this.state.counted + 1;
            this.setState({ 
              loaded:true,
              todos: Processed_Request
            });
            hasharray= Processed_Request;
            
          }
        }
        
      });
    });
    return(hasharray);
    }

    buttonFunc(){
    firebase.firestore()
    .collection('Completed_Requests')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if (doc && doc.exists) {
          const { Processed_Request, Hash_Key} = doc.data();
          if (Hash_Key == this.state.hash_hash){
          
            fake = "it worked";
            this.state.counted = this.state.counted + 1;
            this.setState({ 
              loaded:true,
              todos: Processed_Request
            });
            
          }
        }
        
      });
    });
    }
    render() {
      //this.buttonFunc();
    return (
      <ImageBackground source={require('../assets/moon.jpg')} style ={styles.container}>
        <View style={{ flex: 1 }}>
       
        <Text></Text>
        <Text style={styles.module}>List of Names</Text>
          <ScrollView
          backgroundColor = 'white'>
          <FlatList
                data={this.state.todos}
                renderItem={( {item}) => <Text>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
                
                //renderItem={({ item }) => <Todo {...item} />}
              />
              
            <Text>{fake}{this.state.counted}</Text>
            
          </ScrollView>
          <Text></Text>
          
          
    
        <Text></Text>
          <Text></Text>
          
          <Text></Text>
          <Button
            large
            rounded
            title={'Generate Read'}
            backgroundColor={'#C133FF'}
            onPress={() => this.buttonFunc()}
          />
        </View>
        </ImageBackground>
    );
  }
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
    width: '80%',
  },
  scroll:{
    width: '95%',
    justifyContent: 'center',
    
  }
});
