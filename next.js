import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button, SafeAreaView, ScrollView} from 'react-native';
import firebase from '../database/firebase';


export default class Halaman2 extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }


  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          HALAMAN 2
        </Text>
        <Image
        style={styles.logo}
        source={{
          uri:
            'https://www.fbi.gov/news/stories/fugitives-sought-new-subjects-added-to-cybers-most-wanted-list/@@images/image',
        }}
      />

        <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
     

    <View style={styles.tinyLogo}><Button 
        color="black"
        mode="contained"
          title="<<PREV"
          onPress={() => this.props.navigation.navigate('Home')}>
        </Button></View> 

<View style={styles.tinyLogo}>
        <Button
        mode="contained"
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        /></View>
      </View>
      
       );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
   alignItems: "center",
   padding: 1,
    backgroundColor: 'pink'
  },
  tinyLogo: {
    width: 70,
    height: 50,
    marginBottom: 10
  },
  logo: {
    width: 300,
    height: 150,
  },
  scrollView: {
    backgroundColor: 'red',
    marginHorizontal: 20,
    marginBottom:3,
  },
  text: {
    fontSize: 22,
    color: 'white'
  },
 
  textStyle: {
    fontSize: 15,
    marginBottom: 1
  }
});