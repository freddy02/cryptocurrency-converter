/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState,useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
Image,
  View, ActivityIndicator
} from 'react-native';
 import Header from './Components/Header'
 import Cotizacion from './Components/Cotizacion';
 import Formulario  from './Components/Formulario';
import axios from 'axios';


const App = () => {

  const [moneda, setMoneda] = useState('');
  const [crypto, setCrypto] = useState('');
  const [ApiConsult, setApiConsult] = useState(false);
  const [dataSelected, SetDataSelected] = useState({})
  const [activity, setActivity] = useState(false); 

useEffect( () =>{

if(ApiConsult === true){

  console.log("Cambie a true!!");
  const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`;

  const llamada = async() =>{

     const result = await axios.get(url);
     setActivity(true);
     setTimeout(()=>{

      SetDataSelected(result.data.DISPLAY[crypto][moneda]); 

      setApiConsult(false);
      setActivity(false);
     },3000)

  }

  llamada();


}

},[ApiConsult])


const loadingresult = activity ? <ActivityIndicator size='large'  color="#0000ff" />:<Cotizacion  dataSelected={dataSelected} />
  return (
    
    <>
    <ScrollView style={{flex:1, flexDirection:'column'}}>

    <Header />
    <Image style={styles.fitcryptoimg} source={require('./assets/img/cryptomonedas.png')} />
    <View style={styles.contentStyle}>

    <Formulario setApiConsult={setApiConsult} moneda ={moneda} setMoneda={setMoneda} crypto={crypto} setCrypto={setCrypto} />
    </View>
{loadingresult}




</ScrollView>
    </>

  );
};

const styles = StyleSheet.create({
fitcryptoimg:{
 width:"100%",
 height:150, 
 marginHorizontal:'2.5%'
},
contentStyle:{

marginHorizontal:10


}

});

export default App;
