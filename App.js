import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      
      <View style={styles.container}>
         <Text style={styles.Title}>Quotes Apps</Text>
        <View style={styles.Quote}>
          <Text>Good its fadiashhj;osjarfhoahf;oRunning</Text>
           <Text>oaydogaiduifpauapwdpaifigapdfwafap</Text>
           <Text>oaydogaiduifpauapwdpaifigapdfwafap</Text>
        </View>
      </View>
      <View style={styles.buttonarea}>
        <Button title="Next Quote"  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Title:{
   
    margin:10,
    fontSize:20,    
    textAlign:"center",
  },
  container: {
    marginTop: 150,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // borderWidth: 3,
    // borderColor: "#dc143c",
    marginBottom: 10,
  },
  Quote: {
    height: 200,
    borderColor: "#5f9ea0",
    borderWidth: 2,
    backgroundColor: "#ffebcd",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonarea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
