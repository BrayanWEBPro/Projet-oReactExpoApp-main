import { Button, Text, Avatar } from "react-native-paper";
import { View, BackHandler } from "react-native";

export default function Menu(){
    return(
        <View>
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Avatar.Icon size={200} style={{backgroundColor:'#7F00E3'}} icon='account-supervisor-circle'/>
            </View>
            <View style={{marginTop: 15, marginBottom: 5}}>
                <Button icon='qrcode' style={{borderWidth: 1, borderColor: '#7F00E3', borderRadius: 0}} textColor='black'>Nos ajude</Button>
            </View>
            <View style={{marginTop: 5, marginBottom: 5}}>
                <Button icon='menu-open' style={{borderWidth: 1, borderColor: '#7F00E3', borderRadius: 0}} textColor='black'>Configurações</Button>
            </View >
            <View style={{marginTop: 5, marginBottom: 5}}>
                <Button icon='power' style={{borderWidth: 1, borderRadius: 0, borderColor: '#7F00E3'}}
                onPress={() => {BackHandler.exitApp();}} textColor='black'>Sair</Button>
            </View>
        </View>
    )
}