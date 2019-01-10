import React from 'react';
import {FlatList, ScrollView, View, Text, TextInput, ListItem, ImageBackground, StyleSheet, Picker } from 'react-native';
import firebase from 'react-native-firebase';
import Todo from './Todo'; // we'll create this next
import { Button } from 'react-native-elements';

export default class Todos extends React.Component {
  
    constructor() {
      super();
      this.ref = firebase.firestore().collection('Algorithm_Requests');
      this.state = {
        textInput: '',
        amountInput: '',
        todos: [],
           
      };
      this.arrayHolder=[];
      this.saveHash;

        
    }

    updateTextInput(value) {
      //const { currentUser } = firebase.auth()
      this.setState({ textInput: value});
    }
    updateAmountInput(value) {
      //const { currentUser } = firebase.auth()
      this.setState({ amountInput: value});
    }


    addTodo() {
      const generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
      }
      
      const Req_list = 
      {
        Name_Type: this.state.textInput ,
        Amount:  Number.parseInt(this.state.amountInput),
            
      }
      this.saveHash = generateKey(firebase.auth().currentUser.uid);
      this.ref.add({
        Req_Type: 'Name',
        Req_Arguments: Req_list,
        User_ID: firebase.auth().currentUser.uid,
        Request_Source: 'Mobile',
        Auth_Token: 'NotMyHashKey',
        Hash_Key: this.saveHash,
        });
      this.setState({
        textInput: '',
        amountInput: '',
      });
      
    }
/*
    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    onCollectionUpdate = (querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        const { Auth_Token } = doc.data();
        if (Auth_Token == 'MyHashKey'){
          const { Hash_Key } = 'Worked';
          todos.push({
            key: doc.id,
            doc, // DocumentSnapshot
            Hash_Key,
          
        });
      }
      });
      this.setState({
        todos,
        loading: false,
     });
  }
  */
  /*
    addRead(){
      var docRef = firebase.firestore().collection('TEST_COLLECTION').doc('OjdNocYHOgxcsnVBHwK7');
      const todos = [];
      docRef.get().then(function(doc) {
        if (doc.exists) {
          const { Auth_Token } = doc.data();
          todos.push({
            key: doc.id,
            doc, // DocumentSnapshot
            Auth_Token,
          });
          this.setState({
            todos,
         });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          todos.push({
            key: doc.id,
            doc, // DocumentSnapshot
            Auth_Token:'Fuck you',
          });
          this.setState({
            todos,
         });
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
        todos.push({
          key: doc.id,
          doc, // DocumentSnapshot
          Auth_Token :'You suck',
        });
        this.setState({
          todos,
       });
      });

    }
    */
    addRead(){
    const todos = [];
    firebase.firestore()
    .collection('Completed_Requests')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if (doc && doc.exists) {
          const { Processed_Request, Hash_Key} = doc.data();
          if (Hash_Key == this.saveHash){
          
            //const { Req_Type, Hash_Key} = doc.data();
            todos.push({
            key: doc.id,
            doc, // DocumentSnapshot
            Hash_Key,
            Processed_Request
            });
            this.setState({ 
              todos,
            });
            this.arrayHolder= Processed_Request;
        }
      }
      });
    });

    }
    render() {
    return (
      <ImageBackground source={require('../assets/backdropPurple.jpg')} style ={styles.container}>
        <View style={{ flex: 1 }}>
         
        <Text></Text>
          <Text>List of Names</Text>
          <ScrollView>
          <FlatList
                data={this.arrayHolder}
                renderItem={({ item }) => <Text>{item}</Text>}
                //renderItem={({ item }) => <Todo {...item} />}
                
              />
            <Text></Text>
            
          </ScrollView>
          <TextInput
            style={{height: 40, borderColor: 'green', borderWidth: 1}}
            placeholder={'Add Nametype'}
            value={this.state.textInput}
            onChangeText={(text) => this.updateTextInput(text)}
          />
          <TextInput
            style={{height: 40, borderColor: 'green', borderWidth: 1}}
            placeholder={'Add Amount'}
            value={this.state.amountInput}
            onChangeText={(text) => this.updateAmountInput(text)}
          /> 
          <Button
            large
            rounded
            title={'Generate Name'}
            disabled={!this.state.textInput.length}
            disabled={!this.state.amountInput.length}
            backgroundColor={'#C133FF'}
            onPress={() => this.addTodo()}
          />
          <Text></Text>
          <Button
            large
            rounded
            title={'Generate Read'}
            backgroundColor={'#C133FF'}
            onPress={() => this.addRead()}
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
  }
});
