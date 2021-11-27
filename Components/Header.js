import React from 'react'
import {Text, View, StyleSheet, Platform} from 'react-native'


const Header = () =>(<Text style={styles.encabezado}> Crypto Mateo</Text>)


const styles =  StyleSheet.create({

encabezado:{

paddingTop:Platform.OS ==='ios' ? 50 : 10,
fontFamily:'Lato-Black',
backgroundColor:'#5E49E2',
paddingBottom:10,
textAlign:'center',
fontSize:20,
textTransform:'uppercase',
color:"#FFF"

} 


});

export default Header