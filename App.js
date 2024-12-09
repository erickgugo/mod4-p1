import {StatusBar} from 'expo-status-bar';
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import logoUnivalle from './assets/univalle1.png';
import { launchCamera } from 'react-native-image-picker';

export default function App() {
    const [photo, setPhoto] = useState(null);

    const openCamera = () => {
        console.log('open camaraaaaaaaaaaa');
        launchCamera({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };
                setPhoto(source);
            }
        });
    };


    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            {/*<Image*/}
            {/*    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Univalle_bol_cbb_logo.png'}}*/}
            {/*       style={styles.logo}*/}
            {/*/>*/}
            <Image source={logoUnivalle} style={styles.logo2} />

            <Text style={styles.titulo}>Hola Univalle</Text>
            <Text style={styles.subtitulo}>Bienvenidos al MODULO-4</Text>
            <TouchableOpacity style={styles.boton2}
                              onPress={openCamera}>
                <Text style={styles.textoBoton}>Abrir Camara</Text>
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
        color: '#522b46'
    },
    subtitulo: {
        alignSelf: 'center',
        color: '#522b46'
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
        marginTop: 20,
        backgroundColor: '#522b46',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 15
    },
    textoBoton: {
        fontSize: 16,
        color: '#FFFFFF',
    },
});
