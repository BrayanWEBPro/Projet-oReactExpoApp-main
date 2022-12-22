import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'


export default function TelaLogin({ navigation }) {
  return (
    <View>
      <Text style={{color: '#7F00E3', fontSize: 45, textAlign: 'center', paddingBottom: 50, paddingTop:25}}>{'\n'} SEJA {'\n'} BEM {'\n'} VINDO </Text>
      
      <View style={espacamento.inputs}>
        <TextInput label='Email' mode='outlined'
          outlineStyle={styles.inputs} 
          outlineColor='#7F00E3' activeOutlineColor ='#6C00E3'>
        </TextInput>
      </View>
      
      <View style={espacamento.inputs}>
        <TextInput label='Senha' mode='outlined'
          outlineStyle={styles.inputs} 
          outlineColor='#7F00E3' activeOutlineColor ='#6C00E3'>
        </TextInput>
      </View>
      
      <View style={espacamento.btn}>
        <View style={styles.alinhamentoCentral}>
          <Button 
            mode='contained' 
            onPress={() => navigation.navigate('TelaDeLista')} 
            textColor='white' buttonColor='#7F00E3'
            style={{height: 40, width: 220}}>
            Entrar
          </Button>
        </View>
      </View>

      <View style={{paddingTop: 20, alignItems: 'center'}}>
        <Text onPress={() => navigation.navigate('TelaCadastro')}>
          Caso não tenha se cadastrado Clicke Aqui</Text>
      </View>

      <View style={{alignItems: 'center',justifyContent: 'center', paddingTop: 18}}>
        <View style={{borderWidth: 0.5, borderColor: '#DCDCDC', width: 400}}></View>
      </View>

      <View style={espacamento.btn}>      
        <View style={styles.alinhamentoCentral}>
          <Button mode='contained' icon='google'
          textColor='white' buttonColor='#0000CD'
          style={{borderRadius: 5, height: 40, width: 220}}>
            Entre com Google
          </Button>
        </View>
      </View>
      
      <View style={espacamento.btn}>
        <View style={styles.alinhamentoCentral}>
          <Button mode='contained' icon='facebook'
          textColor='white' buttonColor='#0000CD'
          style={{borderRadius: 5, height: 40, width: 220}}>
            Entre com Facebook
          </Button>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  inputs:{
    borderWidth: 2.2,
    borderRadius: 5,
  },

  alinhamentoCentral:{
    alignItems: 'center',
    justifyContent: 'center'
  },

})

const espacamento = StyleSheet.create({
  inputs:{
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30
  },

  btn:{
    paddingTop: 20,
  }
})