import React from 'react';
import firebase from 'react-native-firebase';

import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


export default class Register extends React.Component {
  state ={
    email: '',
    password: '',
    errorMessage:'',
    nameError:''   
  };

  handleLogin = () => {
    const { navigation } = this.props

    navigation.navigate('Login')
    
  }

  handleSignUp = () => {
    const { navigation } = this.props

    if (this.state.email.trim() === "" || this.state.password.trim() === "") {

      this.setState(() => ({ nameError: "Preenchimento dos campos são obrigatório" }));

    } else {

    alert('Registrado')
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => navigation.navigate('Login'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }}

  render() {
    return (
      <View style={styles.container}>

          <TextInput style={styles.input}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"      
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
          
          <TextInput style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}          
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          />       

          <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.buttonText}>Já possui conta? Logue</Text>
          </TouchableOpacity>     

          {this.state.isAuthenticated ? <Text>Logado com sucesso</Text> : null}
          {!!this.state.nameError ? <Text style={{ color: "red" }}>{this.state.nameError}</Text> : null} 
          {!!this.state.errorMessage ? <Text style={{ color: "red" }}>{this.state.errorMessage}</Text> : null} 
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  input: {
    height: 45,
    backgroundColor:'#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  button:{
    height: 45,
    backgroundColor:'#069',
    alignSelf: 'stretch',   
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText:{
    color: '#FFF',
    fontWeight: 'bold'
  }
});
