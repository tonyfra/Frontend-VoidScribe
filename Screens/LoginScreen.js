import React from 'react'
import { StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native'
import firebase from 'react-native-firebase'
import { Button } from 'react-native-elements';
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('MainScreen'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    return (
      <ImageBackground source={require('../assets/moon.jpg')} style ={styles.container}>
      <View style={styles.container_1}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          rounded
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          borderColor='#33FFF9'
          placeholderTextColor='#33FFF9'
          color='#33FFF9'
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          rounded
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          borderColor='#33FFF9'
          placeholder="Password"
          placeholderTextColor='#33FFF9'
          color='#33FFF9'
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Text></Text>
        <Button 
          rounded
          title="Login" 
          backgroundColor={'#C133FF'}
          onPress={this.handleLogin} />
        <Text></Text>
        <Button
          rounded
          title="Don't have an account? Sign Up"
          backgroundColor={'#C133FF'}
          onPress={() => this.props.navigation.navigate('SignupScreen')}
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
  container_1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})