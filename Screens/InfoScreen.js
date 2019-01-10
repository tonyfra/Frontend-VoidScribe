import React from 'react';
import {FlatList, ScrollView, View, Text, TextInput, Button, } from 'react-native';
import firebase from 'react-native-firebase';
import Todo from './Todo'; // we'll create this next

export default class Todos extends React.Component {
  
    constructor() {
      super();
      this.ref = firebase.firestore().collection('TEST_COLLECTION').doc('0WVH5MTeEpuTWLmKeXNL');
      this.state = {
        textInput: '',
        amountInput: '',
        loading: true,
        todos: [],
        
              
      };
      const { title, c } = doc.data();
          
    }
    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
    }
    componentWillUnmount() {
      this.unsubscribe();
    }

    updateTextInput(value) {
      //const { currentUser } = firebase.auth()
      this.setState({ textInput: value});
    }
    updateAmountInput(value) {
      //const { currentUser } = firebase.auth()
      this.setState({ amountInput: value});
    }
    
    
    render() {
        if (this.state.loading) {
            return null; // or render a loading icon
        }
    return (
        <View>
          <ScrollView>
          <FlatList
                data={this.state.todos}
                renderItem={({ item }) => <Todo {...item} />}
              />
            <Text></Text>
            <Text>Create list of Names</Text>
          </ScrollView>
          <TextInput
            placeholder={'Add Nametype'}
            value={this.state.textInput}
            onChangeText={(text) => this.updateTextInput(text)}
          />
          <TextInput
            placeholder={'Add Amount'}
            value={this.state.amountInput}
            onChangeText={(text) => this.updateAmountInput(text)}
          />
          <Button
            title={'Generate Name'}
            disabled={!this.state.textInput.length}
            disabled={!this.state.amountInput.length}
            onPress={() => this.addTodo()}
          />
          
        </View>
      );
    }
}