import React from "react";
import { View, Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Button, Card, IconButton, Paragraph, Text, Title } from "react-native-paper";



export default function Cart({ route, navigation }){
    const { carrinho } = route.params;
    console.log(carrinho?.length);

    
    return(
        <View style={{ alignItems: 'center',justifyContent: 'center', paddingTop: 25}}>
            <FlatList
                data={carrinho}
                numColumns={2}
                renderItem={({ item }) => (
                    <View>
                        <Card style={{ margin: 4, width: 165}} onPress={() => navigation.navigate('Detalhes', { id: item.id })}>                      
                            <Card.Cover source={{uri: item.imagem}} /> 
                            
                            <Card.Content style={{height: 100}}>
                                <Title style={{fontSize: 12}}>{item.titulo} </Title>
                                <Paragraph style={{fontSize: 9, fontWeight: 'bold'}}>{item.autor}</Paragraph>
                                
                            </Card.Content>
                            <Card.Content>
                                <Title style={{color: 'green', fontSize: 19}}>R$ {item.preco}</Title>
                            </Card.Content>
                        </Card>
                        
                        
                    
                    </View>

                )}
            />
            <Button style={{width: 200, position:'absolute', backgroundColor: '#7F00E3', top: 530}}
            mode='text' icon='cash-fast' labelStyle={{fontSize: 17}} textColor="white"
            onPress={() => Alert.alert('Compra efetuada com sucesso')}>comprar</Button>
      </View>
    )
}