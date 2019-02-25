import React from 'react'
import { StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native'
import firebase from 'react-native-firebase'
import { Button, } from 'react-native-elements';
export default class SignUp extends React.Component {
    state = { email: '', password: '', errorMessage: null, }
    handleSignUp = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('WriteScreen'))
        .catch(error => this.setState({ errorMessage: error.message }))
      
    }
render() {
    return (
      <ImageBackground source={require('../assets/cool-wallpaper-dawn-dusk.jpg')} style ={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.titleText}>Void Scribe</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <Text></Text>
        <TextInput
          lightTheme
          rounded
          placeholder="  Email"
          autoCapitalize="none"
          style={styles.textInput}
          borderColor='#707070'
          placeholderTextColor='#707070'
          color='#707070'
          backgroundColor = 'white'
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          lightTheme
          rounded
          secureTextEntry
          placeholder="  Password"
          autoCapitalize="none"
          style={styles.textInput}
          borderColor='#707070'
          placeholderTextColor='#707070'
          color='#707070'
          backgroundColor = 'white'
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Text></Text>
        <Text></Text>
        <Button
          rounded
          containerViewStyle = {styles.Button}
          backgroundColor={'#0093FF'}
          title="Sign Up" 
          onPress={this.handleSignUp}/>
          <Text></Text>
        <Text style={styles.baseText}>Have an account?
        <Text style={styles.SignUpText} onPress={() => this.props.navigation.navigate('LoginScreen')}>
          Login Here
        </Text>
        </Text>
      </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    width:'50%',
    
  },
  container2: {
    width: '80%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 25,
    borderWidth: 1,
    
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 25,
  },
  titleText: {
    fontFamily: 'Cochin',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  SignUpText: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0093FF',
    textDecorationLine: 'underline',
  },
})