import React, { use, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal
} from 'react-native';

export default function App() {

  const [etanol, setEtanol] = useState('0');
  const [gasolina, setGasolina] = useState('0');
  const [result, setResult] = useState('0');
  const [visibleModal, setVisibleModal] = useState(false)

  function openModal() {
    setVisibleModal(true)
  }

  function closeModal() {
    setVisibleModal(false)
  }

  function calcular(){
      let priceEtanol = parseFloat(etanol);
      let priceGasolina = parseFloat(gasolina);

      let r = priceEtanol / priceGasolina;
      setResult(r);

      if(r <= 0.7) {
        setResult('Compensa usar etanol')
      } else {
        setResult('Compesa usar gasolina')
      }

      openModal();
  }

  return(
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('./src/img/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.textTitle}>Qual a melhor opção?</Text>

      <View style={styles.areaInput}>
        <View style={styles.pricelInput}>
          <Text style={styles.textInput}>Preço do litro do Etanol:</Text>
          <TextInput 
            placeholder='Ex. 4.60'
            style={styles.input}
            value={etanol}
            onChangeText={(value) => setEtanol(value)}
          />
          <Text style={styles.textInput}>Preço do litro do Gasolina:</Text>
          <TextInput 
            placeholder='Ex. 6.20'
            style={styles.input}
            value={gasolina}
            onChangeText={(value) => setGasolina(value)}
          />

          <TouchableOpacity style={styles.btn} onPress={calcular}>
            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal animationType='slide' visible={visibleModal}>
        <SafeAreaView style={styles.container}>
          <Image 
              source={require('./src/img/gas.png')}
              style={styles.logo}
            />
          <Text style={{marginTop: 40, fontSize: 28, color: '#6be60e', fontWeight: 'bold', marginBottom: 30}}>
            {result}
          </Text>
          <Text style={styles.prices}>
            Etanol: R${etanol}
          </Text>
          <Text style={styles.prices}>
            Gasolina: R${gasolina}
          </Text>
          <TouchableOpacity onPress={closeModal} style={styles.btnBack}>
            <Text style={{fontSize: 18, color: '#ff0000', fontWeight: 'bold'}}>Calcular novamente</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'start',
    backgroundColor: '#222',
    width: '100%'
  },
  logo:{
    marginTop: 60
  },
  textTitle:{
    marginTop: 20,
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  areaInput:{
    marginTop: 10,
    flex: 1,
    width: '100%',
    
  },
  pricelInput:{
    margin: 20
  },
  textInput:{
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30
  },
  input:{
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 7,
    borderColor: '#000',
    borderWidth: 1
  },
  btn:{
    textAlign: 'center',
    backgroundColor: '#ff0000',
    height: 50,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  prices:{
    marginTop: 10,
    color: '#ccc'
  },
  btnBack:{
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#ff0000',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300
  }
})