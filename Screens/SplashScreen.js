
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, } from 'react-native';


export default class Todos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 5
    }
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
      1000
    );
  }

  componentDidUpdate() {
    if (this.state.timer === 1) {
      clearInterval(this.interval);
      this.props.navigation.navigate('MainScreen')
    }
  }

  render() {
    return (
      <View style={styles.container1}
        backgroundColor='black'>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        <ImageBackground source={require('../assets/Icon.png')} style={styles.container}></ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '70%'
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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