import React,{useState, useEffect} from 'react'

import {Text, StyleSheet, View, TouchableHighlight, TouchableWithoutFeedback, Animated} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import Axios from 'axios'


const Formulario =({setApiConsult,moneda, setMoneda,crypto, setCrypto}) =>{


const [apiCrypto, setApiCrypto] = useState([])
const [AnimationValue] = useState(new Animated.Value(1))

const pressIn =() =>{

Animated.spring(AnimationValue,{toValue:.70,})

}


const pressOut =() =>{


Animated.spring(AnimationValue, {toValue:1})
}


const setMonedaValue =(value)=>{
 
    console.log(value);
    setMoneda(value)


}

const cotizar =() =>{




setApiConsult(true);

}

const setCryptoValue= (value)=>{

console.log(value);
setCrypto(value)

}


useEffect(  ()=>{
 
const llamadaGet = async ()=>{
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    const result = await Axios.get(url);

console.log(result.data.Data);
    setApiCrypto(result.data.Data)

}
 llamadaGet();



},[])


    return (

<>
<Text style={styles.Label}>Moneda</Text>

<View>
<Picker  onValueChange={(value)=> setMonedaValue(value)} selectedValue={moneda}>
<Picker.Item label="---Seleccione---" value="" />
<Picker.Item label="Dolar EEUU" value="USD" />
<Picker.Item label="Peso Mexicano" value="MXN" />
<Picker.Item label="Euro" value="EUR" />
<Picker.Item label="Libra Esterlina" value="GBP" />
</Picker>


</View>

<Text style={styles.Label}>Criptomoneda</Text>


<View>

<Picker onValueChange={(value)=> setCryptoValue(value)} selectedValue={crypto}>
<Picker.Item label="---Seleccione---" value="" />
{apiCrypto.map( item =>(
    <Picker.Item key={item.CoinInfo.Id} label={item.CoinInfo.FullName} value={item.CoinInfo.Name} />

)


)
}
</Picker>


</View>

<TouchableHighlight  onPress={cotizar} style={styles.touchbtnstyles}>

<Text style={styles.btnStyle} >Cotizar</Text>

</TouchableHighlight>





</>

    )




}

const styles = StyleSheet.create({

Label:{
fontFamily:'Lato-Black',
fontSize:20,
marginVertical:10,
textTransform:'uppercase'
},
touchbtnstyles:{
backgroundColor:'#5E49E2',
padding:15,
 marginTop:10


},
btnStyle:{
   color:'#ffff',
   fontFamily:'Lato-Black',
   textAlign:'center',
   fontSize:20

    
}


});


export default Formulario