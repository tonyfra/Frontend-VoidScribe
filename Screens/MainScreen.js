import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <ImageBackground source={require('../assets/abstract-ancient-antique.jpg')} style={styles.container}>
        <View style={styles.container2}>
          <Text></Text>
          <Text></Text>
          <Text style={styles.titleText}>Void Scribe</Text>
        </View>
        <View style={styles.container1}>

          <Button
            large
            rounded
            title="Generate Names"
            backgroundColor={'#681382'}
            onPress={() => this.props.navigation.navigate('SelectNameCatScreen')}
          />
          <Text></Text>
          <Text></Text>

          <Button
            large
            rounded
            title="Generate Prompts"
            backgroundColor={'#681382'}
            onPress={() => this.props.navigation.navigate('PromptScreen')}
          />
        </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 3,
    height: '50%',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    flex: 1,
    fontFamily: 'Cochin',
    fontSize: 70,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonStyle: {
    height: '50%'
  }

})