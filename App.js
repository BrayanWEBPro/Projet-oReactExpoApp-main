import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Appbar, Drawer } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaLogin from './TelaLogin';
import SegundaTela from './SegundaTela';
import TelaDetalhes from './TelaDetalhes';
import Cart from './carrinho';
import TelaCadastro from './TelaCadastro';
import Menu from './telaMenu';
import { useState } from 'react';

export default function App() {
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function barraTelaPrincipal({navigation, back}){
  return(
    <Appbar.Header style={{backgroundColor: '#7F00E3', zIndex: 0, position: 'relative'}}>
      <StatusBar animated={true} backgroundColor="black"/>
      <Appbar.Action style={{alignItems: 'center'}} iconColor='white' icon='menu' onPress={() => navigation.navigate('TelaMenu')}/>
      <Appbar.Content style={{left: 83}} title='Book Shop' color='white'
      titleStyle={{fontSize: 25}}
      onPress={() => navigation.navigate('TelaDeLista')}/>
    </Appbar.Header>
  );
}

function barraTelaDeDetalhes({navigation,back}){
  return(
  <Appbar.Header style={{backgroundColor: '#7F00E3'}}>
    {back ? <Appbar.BackAction onPress={navigation.goBack} 
    style={{alignItems: 'flex-start'}} iconColor='white' /> :null}
    <Appbar.Content style={{left: 90}} 
    title='Detalhes' titleStyle={{fontSize: 25}} color='white' />
  </Appbar.Header>
)}

function barraTelaCarrinho({navigation,back}){
  return(
  <Appbar.Header style={{backgroundColor: '#7F00E3'}}>
    {back ? <Appbar.BackAction onPress={navigation.goBack} 
    style={{alignItems: 'flex-start'}} iconColor='white' /> :null}
    <Appbar.Content style={{left: 91}} 
    title='Carrinho' titleStyle={{fontSize: 25}} color='white' />
  </Appbar.Header>
)}

function barraTelaMenu({navigation,back}){
  return(
    <Appbar.Header style={{backgroundColor: '#7F00E3'}}>
        {back ? <Appbar.BackAction onPress={navigation.goBack} 
        style={{alignItems: 'flex-start'}} iconColor='white' /> :null}
        <Appbar.Content style={{left: 102}}
        title='Menu' titleStyle={{fontSize: 25}} color='white'/>
    </Appbar.Header>
  )
}

function barraTelaCadastro({navigation, back}){
  return(
    <Appbar.Header style={{backgroundColor: '#7F00E3'}}>
        {back ? <Appbar.BackAction onPress={navigation.goBack} 
        style={{alignItems: 'flex-start'}} iconColor='white' /> :null}
    </Appbar.Header>
  )
}

function MyStack(){

  const [carrinho, setCarrinho] = useState([]);

  function addProduto(produto){
    carrinho.push(produto);
    console.log(carrinho.length);
  }
  return(
    <Stack.Navigator
    initialRouteName='TelaLogin'>
      <Stack.Screen name="TelaDeLogin" component={TelaLogin} options={{headerShown: false}} />
      <Stack.Screen name="TelaDeLista" component={SegundaTela} options={{header:barraTelaPrincipal}} />
      <Stack.Screen name="TelaDeCarrinho" component={Cart} options={{header:barraTelaCarrinho}}/>
      <Stack.Screen name="Detalhes" component={TelaDetalhes} options={{header:barraTelaDeDetalhes}}/>
      <Stack.Screen name="TelaCadastro" component={TelaCadastro} options={{header: barraTelaCadastro}}/>
      <Stack.Screen name="TelaMenu" component={Menu} options={{header: barraTelaMenu}}/>
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
