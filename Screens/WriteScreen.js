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
var Names={

}
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
        Auth_Token: 'thisIsNew',
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
          <ImageBackground source={require('../assets/backdropBlue.jpg')} style ={styles.container}>
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
                  <Picker.Item label="American Cities" value="americanCities" />
                  <Picker.Item label="American Companies" value="americanCompanies" />
                  <Picker.Item label="American Desserts" value="americanDesserts" />
                  <Picker.Item label="American Forenames" value="americanForenames" />
                  <Picker.Item label="American Forenames Female" value="americanForenamesFemale" />
                  <Picker.Item label="American Forenames Male" value="americanForenamesMale" />
                  <Picker.Item label="American States" value="americanStates" />
                  <Picker.Item label="American Surnames" value="americanSurnames" />
                  <Picker.Item label="American States" value="animals" />
                  <Picker.Item label="American States" value="animalSounds" />
                  <Picker.Item label="American States" value="artTypes" />
                  <Picker.Item label="American States" value="birdCommonNames" />
                  <Picker.Item label="American States" value="boardGames" />
                  <Picker.Item label="American States" value="boatTypes" />
                  <Picker.Item label="American States" value="bodyParts" />
                  <Picker.Item label="American States" value="breads" />
                  <Picker.Item label="American States" value="breakfastCereals" />
                  <Picker.Item label="American States" value="britishDesserts" />
                  <Picker.Item label="American States" value="brythonicDeities" />
                  <Picker.Item label="American States" value="buildingTypes" />
                  <Picker.Item label="American States" value="cakes" />
                  <Picker.Item label="American States" value="capitolCities" />
                  <Picker.Item label="American States" value="carBrands" />
                  <Picker.Item label="American States" value="carParts" />
                  <Picker.Item label="American States" value="chineseCities" />
                  <Picker.Item label="American States" value="citiesWorldWide" />
                  <Picker.Item label="American States" value="clothing" />
                  <Picker.Item label="American States" value="cocktails" />
                  <Picker.Item label="American States" value="colours" />
                  <Picker.Item label="American States" value="constellationsModern" />
                  <Picker.Item label="American States" value="cookingUtensils" />
                  <Picker.Item label="American States" value="countries" />
                  <Picker.Item label="American States" value="cryptocurrencies" />
                  <Picker.Item label="American States" value="currencies" />
                  <Picker.Item label="American States" value="danceStyles" />
                  <Picker.Item label="American States" value="dataStructures" />
                  <Picker.Item label="American States" value="dinosaurs" />
                  <Picker.Item label="American States" value="diseases" />
                  <Picker.Item label="American States" value="dogNames" />
                  <Picker.Item label="American States" value="dragons" />
                  <Picker.Item label="American States" value="drinks" />
                  <Picker.Item label="American States" value="dutchForenames" />
                  <Picker.Item label="American States" value="egyptianDeities" />
                  <Picker.Item label="American States" value="emotions" />
                  <Picker.Item label="American States" value="englishTowns" />
                  <Picker.Item label="American States" value="ethnicGroupsContemporary" />
                  <Picker.Item label="American States" value="fabrics" />
                  <Picker.Item label="American States" value="fellsInCambria" />
                  <Picker.Item label="American States" value="fish" />
                  <Picker.Item label="American States" value="flowersCommonNames" />
                  <Picker.Item label="American States" value="frenchForenames" />
                  <Picker.Item label="American States" value="fruit" />
                  <Picker.Item label="American States" value="furniture" />
                  <Picker.Item label="American States" value="generation1Pokemon" />
                  <Picker.Item label="American States" value="generation2Pokemon" />
                  <Picker.Item label="American States" value="generation3Pokemon" />
                  <Picker.Item label="American States" value="generation4Pokemon" />
                  <Picker.Item label="American States" value="americanStates" />
                  <Picker.Item label="American States" value="americanStates" />
                  <Picker.Item label="American States" value="americanStates" />
                  <Picker.Item label="American States" value="americanStates" />
                  <Picker.Item label="American States" value="americanStates" />
                  <Picker.Item label="American States" value="americanStates" />
                  <Picker.Item label="American States" value="americanStates" />
                  <Picker.Item label="American States" value="americanStates" />
                  <Picker.Item label="American States" value="americanStates" />
                  
                  
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
                  <Picker.Item label="45" value="45" />
                  <Picker.Item label="50" value="50" />
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
    