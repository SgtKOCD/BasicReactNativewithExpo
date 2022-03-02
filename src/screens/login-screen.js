import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { auth } from "../../firebase-config";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
        userName:"",
        password:""
    }
  }

  styles = StyleSheet.create({
    txtInput : {
      borderWidth: 1.5,
      
      backgroundColor: "white",
     flex: 1,
      borderColor:"black",
      borderHeigth:"80",
      borderRadius:20,
      padding:5,
      margin:10,
    },
    buttonContainer:{
        flex:2,
        flexDirection: "row",
        justifyContent:"space-around",
        backgroundColor:"orange",
        borderRadius:20,
        fontSize:20,
        textDecorationColor:"white"
    },
    imageArea:{
        paddingTop:"50%"
    },
    txt:{
        textAlign:"center",
        fontSize:20,
        fontFamily:"bold"
    },
  })
  loginHandler=()=>{

    auth.signInWithEmailAndPassword(this.state.userName, this.state.password).then((uc)=>{
        if (uc.user){
            console.log("giriş yapıldı")
            this.route.navigation.navigate("MainScreen");
        }
        else{
            console.log("kullanıcı bulunamadı")
        }
    }).catch((error)=>{
        console.log(error);
    });

   auth.signOut().then(()=>{}).catch(error =>{})
  };
  render() {
    return (
      <View>
          
          <View style={this.styles.imageArea}>

          </View>
        <Text style={this.styles.txt}>WELCOME!</Text>
        <TextInput style={this.styles.txtInput} value={this.state.userName} onChangeText={(text)=>{
            this.setState({
                userName:text
            })
        }}></TextInput>
        <TextInput style={this.styles.txtInput} value={this.state.password} onChangeText={(text)=>{
            this.setState({
                password:text
            })
        }}></TextInput>
        <View style={this.styles.buttonContainer}>
            <TouchableOpacity onPress={this.loginHandler}>
                <Text>Giriş</Text>
            </TouchableOpacity>
        </View>
        
        
      </View>
    );
  }
}
