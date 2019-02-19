import React from 'react';
import {FlatList, ScrollView, View, Text, TextInput, ListItem, ImageBackground, StyleSheet, } from 'react-native';
import firebase from 'react-native-firebase';
import {Picker,Spinner} from "native-base"; 
import Todo from './Todo'; // we'll create this next
import { Button, } from 'react-native-elements';
import {Hash_Key1,Textin,Amountin} from './WriteScreen';
let Ultimate_key;
let fake;
let scode;
let count;
let data;
function processResponse(response) {
  scode = response.status;
  const data = response.json();
  return Promise.all([statusCode, data]).then(res => ({
    statusCode: res[0],
    data: res[1]
  }));
}

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
        counted:0,
        errorMessage: null,
        status:''
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
    addRead(){
      const Req_list = 
      {
        Name_Type: Textin ,
        Amount:  Amountin,
            
      }
      const id =(firebase.auth().currentUser.uid).toString()

      const NameReq={
          "Name_Type": "americanCities",
          "Amount":  40,
          "User_ID": id,
      }
      return fetch('http://www.voidscribe.com/GenerateNames', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          "Name_Type":  Textin,
          "Amount":  Number.parseInt(Amountin),
          "User_ID": id,
        }),
      })
        .then((response) => response.json())
        .then((responseJson)=> {
          this.setState({ 
            loaded:true,
            todos: responseJson.Data,
          })
        })
        
      .catch(error => this.setState({ errorMessage: error.errorMessage }))

    }

    buttonFunc(){
    firebase.firestore()
    .collection('Completed_Requests')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if (doc && doc.exists) {
          const { Processed_Request, Hash_Key} = doc.data();
          if (Hash_Key == Ultimate_key){
          
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
    return (
      <ImageBackground source={require('../assets/backdropBlue.jpg')} style ={styles.container}>
        <View style={styles.viewc }>
       
        <Text></Text>
        <Text style={styles.module}>List of Names</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        
          <ScrollView
          contentContainerStyle={styles.scroll}
          backgroundColor = 'white'>
          <FlatList
          contentContainerStyle={styles.list}
                data={this.state.todos}
                renderItem={( {item}) => <Text style={styles.item}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
                
                //renderItem={({ item }) => <Todo {...item} />}
              />
              
            
            <Text></Text>
            
          </ScrollView>
          <Text></Text>
          
          <Button
            large
            rounded
            title={'Generate Names'}
            backgroundColor={'#C133FF'}
            onPress={() => this.addRead()}
          />
          <Text></Text>
          <Button
                large
                rounded
                title="Back"
                backgroundColor={'#C133FF'}
                onPress={() => this.props.navigation.navigate('WriteScreen')}
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
  viewc:{
    flex:1,
    
    //alignItems: 'center',
  },
  
  module: {
    fontSize: 30,
    marginTop: 4,
    textAlign: 'center',
    width: '80%',
  },
  scroll:{
    alignItems: 'center',
    width: '80%',

  },
  item: {
    fontSize: 20,
    
  },
  
});
