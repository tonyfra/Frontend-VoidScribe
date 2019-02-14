import React from 'react';
import {FlatList, ScrollView, View, Text, TextInput, ListItem, ImageBackground, StyleSheet, } from 'react-native';
import firebase from 'react-native-firebase';
import {Picker, Icon}from "native-base"; 
import Todo from './Todo'; // we'll create this next
import { Button } from 'react-native-elements';
import {categories} from './SelectNameCatScreen';
export {Hash_Key1,Textin, Amountin};
let Hash_Key1;
let Textin;
let Amountin;
let count;
let fake;
export default class Todos extends React.Component {
  
    constructor() {
      super();
      this.ref = firebase.firestore().collection('Algorithm_Requests');
      this.state = {
        textInput: '',
        amountInput: '',
        categories:[],
        tags:[],
        todos:[],
        counted:0,
      };
      fake= "you suck bro"
      this.catHolder=[];
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
    
    addTodo() {
      const generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
      }
      
      const Req_list = 
      {
        Name_Type: this.state.textInput ,
        Amount:  Number.parseInt(this.state.amountInput),
            
      }
      //this.saveHash = generateKey(firebase.auth().currentUser.uid);
      Hash_Key1=generateKey(firebase.auth().currentUser.uid);
      
      this.ref.add({
        Req_Type: 'Name',
        Req_Arguments: Req_list,
        User_ID: firebase.auth().currentUser.uid,
        Request_Source: 'Mobile',
        Auth_Token: 'NotMyHashKey',
        Hash_Key: Hash_Key1,
      });
      this.setState({
        textInput: '',
        amountInput: '',
      });
    }

    addRead() {
      firebase.firestore()
      .collection('Algorithm_Information')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if (doc && doc.exists) {
            const {types} = doc.data();
            count++;
            var arr = [];

            for (var Key in types) {
              arr.push(types[Key]);
            }
            var arr2 = Object.keys(types).map(function (i) {
              return types[i];
            });
            var arr3 = Object.values(types);
           //fake = "it worked";
           this.setState({
              todos: arr,
              counted: count,
            });
           // let cat =[]
           // cat = Name_Types;
            
            
            
          }
        });
      });
      //count++;
    }
    
    
    categoriesFunc(){
      let cat =[]
      cat = this.state.todos;
      for (var i = 0;i<cat.length;i++){
        this.catHolder.push("s")
      }
    }

    buttonFunc (){
      this.addTodo()
      this.props.navigation.navigate('ReadScreen')
    }
        render() {
        return (
          <ImageBackground source={require('../assets/moon.jpg')} style ={styles.container}>
            <View style={{ flex: 1 }}>
             
            <Text>{this.arrayHolder}</Text>
              <Text></Text>
              <Picker
                  iosIcon={<Icon name="arrow-down" />}
                  mode="dropdown"
                  placeholder="Select Name Type"
                  selectedValue={this.state.textInput}
                  onValueChange={(value) => this.updateTextInput(value)}
              > 
                  <Picker.Item label="American States" value="americanStates" />
                  <Picker.Item label="Animals" value="animals" />
                  <Picker.Item label="Breads" value="breads" />
                  <Picker.Item label="British Desserts" value="britishDesserts" />
                  <Picker.Item label="Car Brands" value="carBrands" />
                  <Picker.Item label="Clothing" value="clothing" />
                  <Picker.Item label="Dog Names" value="dogNames" />
                  <Picker.Item label="Dragons" value="dragons" />
                  <Picker.Item label="Emotions" value="emotions" />
                  <Picker.Item label="Fabrics" value="fabrics" />
                  <Picker.Item label="Fruit" value="fruit" />
                  <Picker.Item label="Greek Towns" value="greekTowns" />
                  <Picker.Item label="Pokemon" value="pokemon" />
                  
              </Picker>
              <Picker
                  iosIcon={<Icon name="arrow-down" />}
                  mode="dropdown"
                  placeholder="Select A Category "
                  selectedValue={this.state.textInput}
                  onValueChange={(value) => this.updateTextInput(value)}
              >
                  
                  <Picker.Item label="Creatures" value="americanStates" />
                  <Picker.Item label="Animals" value="animals" />
                  <Picker.Item label="Breads" value="breads" />
                  <Picker.Item label="British Desserts" value="britishDesserts" />
                  <Picker.Item label="Car Brands" value="carBrands" />
                  <Picker.Item label="Clothing" value="clothing" />
                  <Picker.Item label="Dog Names" value="dogNames" />
                  <Picker.Item label="Dragons" value="dragons" />
                  <Picker.Item label="Emotions" value="emotions" />
                  <Picker.Item label="Fabrics" value="fabrics" />
                  <Picker.Item label="Fruit" value="fruit" />
                  <Picker.Item label="Greek Towns" value="greekTowns" />
                  <Picker.Item label="Pokemon" value="pokemon" />
                  
              </Picker>
              <Text></Text>
              <Picker
                  iosIcon={<Icon name="arrow-down" />}
                  mode="dropdown"
                  placeholder="Select Amount of Names"
                  selectedValue={this.state.amountInput}
                  onValueChange={(value) => this.updateAmountInput(value)}
                >
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="10" value="10" />
                  <Picker.Item label="15" value="15" />
                  <Picker.Item label="20" value="20" />
                  <Picker.Item label="25" value="25" />
                  <Picker.Item label="30" value="30" />
                  <Picker.Item label="35" value="35" />
                  <Picker.Item label="40" value="40" />
              </Picker>
              
              <Button
                large
                rounded
                title={'Generate Name Screen'}
                disabled={!this.state.textInput.length}
                disabled={!this.state.amountInput.length}
                backgroundColor={'#C133FF'}
                onPress={() => this.buttonFunc()}
              />
              <Button
                large
                rounded
                title={'Read'}
                backgroundColor={'#C133FF'}
                onPress={() => this.addRead()}
              />
              
              <Text></Text>
              
              <Text>{this.state.todos}</Text>
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
    