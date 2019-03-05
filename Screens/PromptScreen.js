import React from 'react';
import { FlatList, ScrollView, View, Text, TextInput, ListItem, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker, Icon } from "native-base";
import { Button, } from 'react-native-elements';
loading = false;
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
    this.state = {
      textInput: '',
      amountInput: '',
      todos: [],
      loaded: false,
      errorMessage: null,
      status: '',
      prompts: []
    };
    this.arrayHolder = [];
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  updateTextInput(value) {
    this.setState({ textInput: value });
  }

  updateAmountInput(value) {
    this.setState({ amountInput: value });
  }

  addRead() {
    this.load()
    return fetch('http://www.voidscribe.com/GeneratePrompts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        "Prompt_Type": this.state.textInput,
        "Amount": Number.parseInt(this.state.amountInput),
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loaded: false,
          todos: responseJson.Data,
        })
      })

      .catch(error => this.setState({ errorMessage: error.errorMessage }))

  }
  load() {
    this.setState({
      loaded: true,
      todos: [],
    })

  }


  render() {
    return (
      <ImageBackground source={require('../assets/abstract-ancient-antique.jpg')} style={styles.container}>
        <Text></Text>
        <Text></Text>
        <View style={styles.viewc}>
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
          <View style={styles.viewscroll}>
            <ScrollView
              contentContainerStyle={styles.scroll}
              backgroundColor='rgba(195,195,195,.3)'
            >
              <FlatList
                contentContainerStyle={styles.list}
                data={this.state.todos}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
              />
              <Text></Text>
              <ActivityIndicator size="large" color="#681382"
                animating={this.state.loaded}
                hidesWhenStopped={true} 
              />
            </ScrollView>
          </View>
          <View style={styles.container1}>
            <Text></Text>
            <Picker
              iosIcon={<Icon name="arrow-down" />}
              mode="dropdown"
              placeholder="Select Prompt Type..."
              style={styles.pickerstyle}
              textStyle={{ color: "white" }}
              placeholderStyle={{ color: "white" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.textInput}
              onValueChange={(value) => this.updateTextInput(value)}
            >
              <Picker.Item label="Acquire" value="acquire" />
              <Picker.Item label="Follow" value="follow" />
              <Picker.Item label="Give" value="give" />
              <Picker.Item label="Guard" value="guard" />
              <Picker.Item label="Harm" value="harm" />
              <Picker.Item label="Heal" value="heal" />
              <Picker.Item label="Lead" value="lead" />
              <Picker.Item label="Travel" value="travel" />
            </Picker>
            <Text></Text>
            <Picker
              iosIcon={<Icon name="arrow-down" />}
              mode="dropdown"
              placeholder="Select Amount of Prompts..."
              style={styles.pickerstyle}
              textStyle={{ color: "white" }}
              placeholderStyle={{ color: "white" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.amountInput}
              onValueChange={(value) => this.updateAmountInput(value)}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
          <Text></Text>
          <Button
            large
            rounded
            title={'Generate Prompts'}
            backgroundColor={'#681382'}
            disabled={!this.state.textInput.length}
            disabled={!this.state.amountInput.length}
            onPress={() => this.addRead()}
          />
          <Text></Text>
          <Button
            large
            rounded
            title="Back"
            backgroundColor={'#681382'}
            onPress={() => this.props.navigation.navigate('MainScreen')}
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
  viewc: {
    flex: 1,
  },
  module: {
    fontSize: 30,
    marginTop: 4,
    textAlign: 'center',
    width: '80%',
  },
  scroll: {
    alignItems: 'center',
  },
  item: {
    fontSize: 20,
  },
  viewscroll: {
    borderWidth: 2,
    height: '50%'
  },
  pickerstyle: {
    borderColor: 'black',
    borderWidth: 2,
    width: '100%',
    backgroundColor: '#681382'
  }
});
