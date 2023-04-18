/*
* File: reacnat_alma
* Author: Szabó Brigitta
* Copyright: 2023, Szabó Brigitta 
* Date: 2023-04-18
* Github: Github.com/tailorbrigit
* Licenc: MIT
*/


import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

function calculatePercentage(total, count) 
{
  return ((count / total) * 100).toFixed(2);
}

export default function App() 
{
  const [firstClassApples, setFirstClassApples] = useState(0);
  const [secondClassApples, setSecondClassApples] = useState(0);
  const firstClassPercentage = calculatePercentage(totalApples, firstClassApples);
  const secondClassPercentage = calculatePercentage(totalApples, secondClassApples);
  const totalApples = firstClassApples + secondClassApples;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>almaosztaly</Text>
      <Text style={styles.subheader}>Készítő: Szabó Brigitta(Szoft II/N)</Text>
      <TextInput
        style={styles.input}
        placeholder="Elsőosztályú almák"
        keyboardType="numeric"
        onChangeText={(value) => setFirstClassApples(parseInt(value))}
      />
      <TextInput
        style={styles.input}
        placeholder="Másodosztályú almák"
        keyboardType="numeric"
        onChangeText={(value) => setSecondClassApples(parseInt(value))}
      />
      <Text style={styles.result}>Kapott almák száma: {totalApples}</Text>
      <Text style={styles.result}>Elsőosztályú almák százalékban: {firstClassPercentage}%</Text>
      <Text style={styles.result}>Másodosztályú almák százalékban: {secondClassPercentage}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  input: {
    height: 30,
    width: '70%',
    margin: 22,
    borderWidth: 2,
    padding: 15,
  },
  result: {
    marginVertical: 15,
    fontSize: 15,
  },

  subheader: {
    fontSize: 14,
    marginBottom: 15,
  },
});