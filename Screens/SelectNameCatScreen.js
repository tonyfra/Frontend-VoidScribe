import React from 'react';
import { View, Text, ImageBackground, StyleSheet, } from 'react-native';
import { Button } from 'react-native-elements';
export { categories };
let categories;

export default class Todos extends React.Component {

  constructor() {
    super();
    this.state = {
      textInput: '',
      amountInput: '',
      categories: [],
      tags: [],
    };

    this.arrayHolder = [];
    this.saveHash;
    count = 0;

  }


  AllFunc() {
    categories = "All"
    this.props.navigation.navigate('ReadScreen')
  }
  ThingsFunc() {
    categories = "Things"
    this.props.navigation.navigate('ReadScreen')
  }
  CreaturesFunc() {
    categories = "Creatures"
    this.props.navigation.navigate('ReadScreen')
  }
  PlacesFunc() {
    categories = "Places"
    this.props.navigation.navigate('ReadScreen')
  }
  IdeasFunc() {
    categories = "Ideas"
    this.props.navigation.navigate('ReadScreen')
  }


  render() {
    return (
      <ImageBackground source={require('../assets/abstract-ancient-antique.jpg')} style={styles.container}>
        <View style={styles.container2}>
          <Text></Text>
          <Text style={styles.titleText}>Select a Category</Text>
        </View>
        <View style={styles.container1}>
          <Button
            large
            rounded
            title={'All Names'}
            backgroundColor={'#681382'}
            onPress={() => this.AllFunc()}
          />
          <Text></Text>
          <Button
            large
            rounded
            title={'Creatures'}
            backgroundColor={'#681382'}
            onPress={() => this.CreaturesFunc()}
          />
          <Text></Text>
          <Button
            large
            rounded
            title={'Ideas'}
            backgroundColor={'#681382'}
            onPress={() => this.IdeasFunc()}
          />
          <Text></Text>
          <Button
            large
            rounded
            title={'Places'}
            backgroundColor={'#681382'}
            onPress={() => this.PlacesFunc()}
          />
          <Text></Text>
          <Button
            large
            rounded
            title={'Things'}
            backgroundColor={'#681382'}
            onPress={() => this.ThingsFunc()}
          />
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>

          <Button
            large
            rounded
            title={'Back'}
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
  container1: {
    flex: 6.7,
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