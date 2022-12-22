import { StyleSheet, View, FlatList, Image } from 'react-native'
import { Appbar, TextInput, Surface, Button, Card, Title, Paragraph, Text, IconButton, Badge, FAB} from 'react-native-paper'
import { useEffect, useState } from 'react'

export default function SegundaTela({navigation}) {
  const [usuarios, setUsuarios] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

    const getUsuarios = async () => {
        try {
            const resposta = await fetch(
                'https://6398750e044fa481d69e3195.mockapi.io/Livros'
            );
            const json = await resposta.json();
            setUsuarios(json);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsuarios();
    }, []);

    function addCarrinho(produto){
      const newCarrinho = [...carrinho];
      newCarrinho.push(produto);

      setCarrinho(newCarrinho);
    }
  return (
    <View>
      <View>
          <Badge style={{backgroundColor: '#0085FF', position: 'absolute', zIndex: 3, top: 533, right: 18, width: 22, height: 22, fontSize: 15 }}>{carrinho?.length}</Badge>
        
        <View style={{position: 'absolute', top: 540, right: 20}}>
          <FAB style={{width: 55, borderRadius: 15, backgroundColor: '#7F00E3', zIndex: 2}}
          icon="cart" color='white'
          size={25}
          onPress={() => navigation.navigate('TelaDeCarrinho', { carrinho})}/>
        </View>
      </View>
      
     

      <View style={style.inputDePesquisa}>
        <TextInput 
          mode='outlined' label='Pesquisar'
          outlineStyle={{borderWidth: 2, borderRadius: 20,justifyContent: 'center', height: 40, alignSelf: 'center'}}
          activeOutlineColor='#7200CC'>
        </TextInput>
      </View>

      <View style={{paddingTop: 10, alignItems:'center'}}>
        <Surface style={style.SurfaceMaior} elevation={3} >
          <Surface style={style.SurfaceMenor}>
            <Text style={{color: 'white', fontSize:10}}>DESCONTO DE</Text>
            <Text style={{color: 'white', fontSize:40, paddingBottom: 10, paddingTop: 10}}>70%</Text>
            <Text style={{color: 'white', fontSize:9}}>PAGAMENTO NO PIX</Text>
          </Surface>
          <Text icon='book-alphabet' color='white'></Text>
        </Surface>
      </View>

      <View style={{ alignItems: 'center',justifyContent: 'center', paddingTop: 25, zIndex: 1, marginBottom: 500}}>
            <FlatList
                data={usuarios}
                numColumns={2}
                renderItem={({ item }) => (
                    <View >
                        <Card style={{ margin: 4, width: 170, height: 380}} onPress={() => navigation.navigate('Detalhes', { id: item.id })}>                      
                            <Card.Cover source={{uri: item.imagem}} /> 
                            

                            <Card.Content style={{height: 100}}>
                                <Title>{item.titulo}</Title>
                                <Paragraph>{item.autor}</Paragraph>
                                <View>
                                  <Button style={{borderRadius: 4, alignItems:'center', justifyContent: 'center',
                                  backgroundColor: '#0085FF',}} icon='cart' textColor='white' mode='text' onPress={() => addCarrinho(item)}>Adicionar</Button>
                                </View>
                            </Card.Content>
                        
                        </Card>
                    </View>
                    
                )}
            />
            
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  
  inputDePesquisa:{
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
  },

  SurfaceMaior:{
    backgroundColor: '#7200CC',
    height: 150,
    width: 330,
    borderRadius: 20,
    alignItems: 'center',
  },

  SurfaceMenor:{
    marginTop: 14, 
    marginRight: 160,
    backgroundColor: '#470080',
    height: 120,
    width: 110,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
    
  }
})