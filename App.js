import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import React from "react";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Image
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Univalle_bol_cbb_logo.png'}}
                   style={styles.logo}
            />

            <Text style={styles.titulo}>Hola Univalle</Text>
            <Text style={styles.subtitulo}>Bienvenidos al modulo 4</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
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
        height: 200, width: 200
    }
});
