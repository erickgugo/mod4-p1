import {StyleSheet} from "react-native";

const  styles = StyleSheet.create({
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

export default styles;