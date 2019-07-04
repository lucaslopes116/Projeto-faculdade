import React from 'react'
import firebase from 'react-native-firebase'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}

signOut = () => {
  const { navigation } = this.props

  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    navigation.navigate('Login')

  }).catch((error)=> {
    // An error happened.
  });

}
render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}>
        <Text>
          Oi {currentUser && currentUser.email}!
        </Text>

        <TouchableOpacity style={styles.button} onPress={this.signOut}>
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    height: 45,
    backgroundColor:'#069',
    alignSelf: 'stretch',   
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  buttonText:{
    color: '#FFF',
    fontWeight: 'bold'
  }
})