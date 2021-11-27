import { object } from 'joi';
import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


const Cotizacion = ({dataSelected}) =>{

if(Object.keys(dataSelected).length === 0)
return null;


return(
<View style={styles.resultado}>


<Text style={[styles.mainTitle,styles.span]}> {dataSelected.PRICE}</Text>

<Text style={styles.texto}>
El precio mas alto del dia es:{' '}
<Text style={styles.span}> {dataSelected.HIGHDAY}</Text>
</Text>
<Text style={styles.texto}>
El precio mas bajo del dia es: {' '}
<Text style={styles.span}>{dataSelected.LOWDAY}</Text>
</Text>
<Text style={styles.texto}>
Variacion ultimas 24 horas: {' '}
<Text style={styles.span}> {dataSelected.CHANGEPCT24HOUR}</Text>
</Text>
<Text style={styles.texto}>
Ultima Actualizacion:{' '}
<Text style={styles.span}> {dataSelected.LASTUPDATE}</Text>
</Text>




</View>


)


}

 const styles  = StyleSheet.create({

resultado:{

    backgroundColor:'#5E49E2',
marginTop:20,
padding:7,


},
texto:{  
      fontFamily:'Lato-Regular',
      color:'#ffff',
      fontSize:18,
      paddingBottom:8

},
precio:{

},

span:{
    fontFamily:'Lato-Black',



},

mainTitle:{

    fontFamily:'Lato-Black',
    color:'#ffff',
    fontSize:25,
    paddingBottom:12,
    textAlign:'center'
}


 });
export default Cotizacion;