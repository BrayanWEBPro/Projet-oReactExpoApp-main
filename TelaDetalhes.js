import { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView} from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

export default function TelaDetalhes({ route }) {
    const id = route?.params?.id;
    const [usuario, setUsuario] = useState({});

    const getUsuario = async (userId) => {
        try {
            const resposta = await fetch(
                'https://6398750e044fa481d69e3195.mockapi.io/Livros/' + userId
            );
            const json = await resposta.json();
            setUsuario(json);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsuario(id);
    }, [id]);

    return (
        <ScrollView>
                <View style={{alignItems: 'center'}}>
                    
                        {id ? (

                            <View style={{alignItems: 'center', width: 350}}>
                                
                                <Card style={{alignItems: 'center', marginTop: 40}}>
                                    <Card.Cover style={{width: 350, height: 450, borderBottomEndRadius: 0}} source={{uri: usuario.imagem}} />
                                
                                    <Card.Content style={{marginTop: 20}}>
                                        <Title>{usuario.titulo}</Title>
                                        <Title style={{color: 'green'}}>R$ {usuario.preco}</Title>
                                        <Paragraph>{usuario.sinopse}</Paragraph>
                                    </Card.Content>                    
                                </Card>
                               
                            </View>
                        ) : (
                            <View>
                                <Text>Cadê o id?</Text>
                            </View>
                        )}
                
        </View>
        </ScrollView>
    );
}
