import React from 'react'
import firebase from 'react-native-firebase'


import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { getLocation, getData } from 'react-native-weather-api';
import { Card, Button } from 'react-native-elements'

export default class Main extends React.Component {
  state = {
     currentUser: null,
     city:'',
     feelsC:'',
     tempC:'',
     windKph:'',
     icon:'',
     data: []
    
    }

  componentDidMount() {
    const { currentUser } = firebase.auth()

    getLocation()

    setTimeout(()=>{
      let data = new getData()
      console.log(data)
      this.setState({city: data.city, feelsC: data.feelsC, tempC: data.tempC,windKph:data.windKph,icon:data.icon, data: data })

    },5000)
  
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
    const { currentUser, city, feelsC, tempC, data, icon, windKph  } = this.state

    return (
      <View style={styles.container}>
        
          {data.length === 0 ?
              <Card style={styles.containerLoadingCard}>
                <View style={styles.containerLoading}>
                  <Text>Loading</Text>
                  <ActivityIndicator size="large" />
                </View>
              </Card>
            : 
          
            <Card
                title={city}
                image={{uri: icon}}
                >
                <Text style={{marginBottom: 10}}>
                  Sensação térmica de {feelsC}ºC
                </Text>
                <Text style={{marginBottom: 10}}>
                  Temperatura de {tempC}ºC
                </Text>
                <Text style={{marginBottom: 10}}>
                  Velocidade do vento é de  {windKph}km/h
                </Text>
                <Button          
                  backgroundColor='#03A9F4'
                  onPress={this.signOut}
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='Sair' />
            </Card>
                      
            }
          
            
          
              {/* <TouchableOpacity style={styles.button} onPress={this.signOut}>
                  <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  containerLoadingCard:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 2555
  },
  containerLoading:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 255
  },
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