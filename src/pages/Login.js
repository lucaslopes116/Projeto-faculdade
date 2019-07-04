import React from 'react';
import firebase from 'react-native-firebase';


import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


export default class Login extends React.Component {
  state ={
    email: '',
    password: '',  
    errorMessage: '', 
    nameError:''      
  };
  
  handleLogin = () => {
    const { email, password } = this.state
    const { navigation } = this.props

    if (this.state.email.trim() === "" || this.state.password.trim() === "") {

      this.setState(() => ({ nameError: "Preenchimento dos campos são obrigatório" }));

    } else {

      alert('logou')
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('Main'))
        .catch(error => this.setState({ errorMessage: error.message }))

  }}

  handleRegister = () =>{
    const { navigation } = this.props

    navigation.navigate('Register')
  }


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

          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
            <Text style={styles.buttonText}>Crie uma conta</Text>
          </TouchableOpacity>     

          {this.state.isAuthenticated ? <Text>Logado com sucesso</Text> : null}
          {!!this.state.errorMessage ? <Text style={{ color: "red" }}>{this.state.errorMessage}</Text> : null} 
          {!!this.state.nameError ? <Text style={{ color: "red" }}>{this.state.nameError}</Text> : null} 
    
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
