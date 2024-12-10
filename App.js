import {StatusBar} from 'expo-status-bar';
import {Alert, Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import styles from "./style";

export default function App() {
    const [image, setImage] = useState(null);

    let abrirArchivosAsync = async () => {
        console.log("abrirArchivosAsync")
        let ResultadoPermiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log("Granted: " + ResultadoPermiso.granted)
        if (ResultadoPermiso.granted == false) {
            console.log("is False: ")
            alert('Si no me das permiso,  no puedo funcionar');
            return;
        }
        //alert('tengo permiso');
        const resultadoSeleecion = await ImagePicker.launchImageLibraryAsync();
        console.log(resultadoSeleecion)
        console.log(resultadoSeleecion.assets[0].uri)
        if (!resultadoSeleecion.canceled) {
            setImage(resultadoSeleecion.assets[0].uri);
            console.log(image)
        }
    }

    let abrirCamaraAsync = async () => {
        console.log("abrirArchivosAsync")
        let ResultadoPermiso = await ImagePicker.requestCameraPermissionsAsync();
        console.log("Granted: " + ResultadoPermiso.granted)
        if (ResultadoPermiso.granted == false) {
            console.log("is False: ")
            alert('Si no me das permiso, no puedo abrir camara');
            return;
        }
        //alert('tengo permiso');
        const resultadoCamara = await ImagePicker.launchCameraAsync();
        console.log(resultadoCamara)
        console.log(resultadoCamara.assets[0].uri)
        if (!resultadoCamara.canceled) {
            setImage(resultadoCamara.assets[0].uri);
            console.log(image)
        }
    }

    const abrirCompartiArchivoAsync = async () => {
        console.log("abrirCompartiArchivoAsync")
        if (!await Sharing.isAvailableAsync()) {
            alert("Esta imagen no se puede compartir en tu dispositivo")
            return;
        }
        Sharing.shareAsync(image)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Image source={{
                uri: image ? image : 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Univalle_bol_cbb_logo.png'
            }} style={styles.logo2}/>

            <Text style={styles.titulo}>Hola Univalle</Text>
            <Text style={styles.subtitulo}>Bienvenidos al MODULO-4</Text>
            <Pressable style={styles.boton2}
                       onPress={abrirCamaraAsync}>
                <Text style={styles.textoBoton}>Abrir Camara</Text>
            </Pressable>

            <Pressable style={styles.boton2}
                       onPress={abrirCompartiArchivoAsync}>
                <Text style={styles.textoBoton}>Compartir Imagen</Text>
            </Pressable>
        </View>
    );
}
