import React from "react";
import { Text, Button, TextInput } from "react-native-paper";
import { View, Alert} from "react-native";

export default function TelaCadastro ({navigation, back}){
    return(
        <View style={{flex: 1, backgroundColor: '#7F00E3', flexDirection: 'column'}}>
            <View style={{marginTop: 5, alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: 'white', marginBottom: 20, fontSize: 30}}>Cadastro</Text>
            </View>
            <View>
                <TextInput style={{left: 30}} mode="outlined" outlineColor="#6C00E3" label='Nome Completo' 
                outlineStyle={{paddingTop: 20, width: 300,}} ></TextInput>
                
                <TextInput style={{left: 30}} mode="outlined" outlineColor="#6C00E3" label='Nome de usuario' 
                outlineStyle={{paddingTop: 20, width: 300}}></TextInput>
                
                <TextInput style={{left: 30}} mode="outlined" outlineColor="#6C00E3" label='Email' 
                outlineStyle={{paddingTop: 20, width: 300}}></TextInput>
                
                <TextInput style={{left: 30}} mode="outlined" outlineColor="#6C00E3" label='Telefone' 
                outlineStyle={{paddingTop: 20, width: 300}}></TextInput>
                
                <TextInput style={{left: 30}} mode="outlined" outlineColor="#6C00E3" label='Senha' 
                outlineStyle={{paddingTop: 20, width: 300}}></TextInput>
                
                <TextInput style={{left: 30}} mode="outlined" outlineColor="#6C00E3" label='Confirme a senha' 
                outlineStyle={{paddingTop: 20, width: 300}}></TextInput>

                <Button style={{backgroundColor:'black', marginTop: 40, width: 220, left: 70}}  textColor='white'
                onPress={() => Alert.alert('Obrigado por se cadastrar, esperamos que goste do aplicativo')}>Cadastrar-se</Button>
                
            </View>
        </View>
    );
}