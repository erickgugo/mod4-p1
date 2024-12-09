import {StatusBar} from 'expo-status-bar';
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from "react";
import logoUnivalle from './assets/univalle1.png';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            {/*<Image*/}
            {/*    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Univalle_bol_cbb_logo.png'}}*/}
            {/*       style={styles.logo}*/}
            {/*/>*/}
            <Image source={logoUnivalle} style={styles.logo2} />

            <Text style={styles.titulo}>Hola Univalle</Text>
            <Text style={styles.subtitulo}>Bienvenidos al modulo 4</Text>
            <TouchableOpacity style={styles.boton2}
            onPress={() => Alert.alert("Hola Univalle")}>
                <Text style={styles.textoBoton}>Haz click aqui</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'pink',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 50,
        color: "white"
    },
    subtitulo: {
        alignSelf: 'center'
    },
    logo: {
        height: 100,
        width: 100,
    },
    logo2: {
        height: 200,
        width: 200,
        borderRadius: 100
    },
    boton2: {
      backgroundColor: 'cyan',
        margin: 20,
        padding:15,
    },
    textoBoton: {
        fontSize: 20,
        color: 'white',
    },
});
