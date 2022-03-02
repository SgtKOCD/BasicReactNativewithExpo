import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/login-screen'; // login-screeen.js dosyasını import ettik
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/main-screen';
const Stack = createNativeStackNavigator();


function HomeScreen(){
  return(
    <View style={styles.container}>
     <LoginScreen></LoginScreen>
    </View>
   )

}

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:"column",
    //justifyContent: 'center',
    alignItems:"center"
  },
});
