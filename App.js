import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Quotes from "./quotesAndJs/Quotes";


export default function App() {
  const [valuegen,setValuegen]=useState(0);
  function valueGenerate(){
    let min = Math.ceil(0);
    let max = Math.floor(699);
    setValuegen(Math.floor(Math.random() * (max - min + 1) + min))
    console.log((Math.floor(Math.random() * (max - min + 1) + min)+"but value is "+valuegen)) //The maximum is inclusive and the minimum is inclusive
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.Title}>Quotes Apps</Text>
        <View style={styles.Quote}>
          <Quotes value={valuegen}/>
        </View>
      </View>
      <View style={styles.buttonarea}>
        <Button title="Next Quote" onPress={()=>valueGenerate()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    margin: 10,
    fontSize: 25,
    textAlign: "center",
  },
  container: {
    marginTop: 150,
    backgroundColor: "#fff",
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
    fontSize: 24 ,
  },
  buttonarea: {
    justifyContent: "center",
    alignItems: "center",
  },
});
