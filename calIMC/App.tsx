import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  const [peso, setWeight] = useState('');
  const [altura, setHeight] = useState('');
  const [resultado, setResult] = useState('');
  const calculateIMC = () => {
    const heightMeters = Number(altura) / 100;
    const weightNumber = Number(peso);

    const imc = weightNumber / (heightMeters * heightMeters);
    setResult(imc.toFixed(2)+"\n"+Diagnostico (imc));
  };
  const Diagnostico = (imc: number) => {
    if (imc < 18.5) {
      return  'Você esta abaixo do peso';
    } else if (imc>= 18.5 && imc < 25) {
      return 'Peso normal, boa garoto(a)';
    } else if (imc >= 25 && imc < 30) {
      return 'Acima do peso, nada que uma dietinha não resolva';
    } else {
      return 'você esta obeso!';
    }

  }

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu peso"
        onChangeText={(text) => setWeight(text)}
        value={peso}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua altura (cm)"
        onChangeText={(text) => setHeight(text)}
        value={altura}
        keyboardType="numeric"
      />
      
      <TouchableOpacity style={styles.button} onPress={calculateIMC}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{resultado ? `IMC = ${resultado}` : ''} </Text>
    </View>
    
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd9fe',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 50,
    width: '60%',
    borderColor: '#8a1d88',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 30,
    
  },
  button: {
    backgroundColor: '#8a1d88',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 70,
    color: '#8a1d88'
  },
  buttonText: {
    color: '#db95da',
    fontSize: 16,
    fontWeight: 'bold',

  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#2b0c23'
  
  },
  
});

 export default App;