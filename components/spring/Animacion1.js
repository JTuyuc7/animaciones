import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';

const Animacion1 = () => {

    const [ animacionBtn ] = useState( new Animated.Value(1));

    const presionarBtn = () => {
        Animated.spring(
            animacionBtn,{
                toValue: 0.75,
                tension: 1,
                useNativeDriver: true
            }
        ).start()
    }

    const soltarBtn = () => {
        Animated.spring(
            animacionBtn, {
                toValue: 1,
                friction: 3,
                useNativeDriver: true
            }
        ).start();
    }

    const estiloAnimacion = {
        transform: [{ scale: animacionBtn }]
    }

    return (  
        <>
            <View style={ styles.contenedor}>
                <TouchableWithoutFeedback
                    onPressIn={ () => presionarBtn() }
                    onPressOut={ () => soltarBtn() }
                >
                    <Animated.View style={ [styles.Cboton, estiloAnimacion ]}>
                        <Text style={ styles.textoBoton}>Inicia Sesion</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        //backgroundColor: 'blue',
        paddingHorizontal: 20
    },
    textoBoton: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    Cboton: {
        backgroundColor: 'blue',
        height: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 20
    }
})

export default Animacion1;