import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

const Animacion1 = () => {

    const [ animacion1 ] = useState( new Animated.Value(100));
    const [ animacion2 ] = useState( new Animated.Value(-50));

    useEffect(() => {
        Animated.sequence([
            Animated.timing(
                animacion2, {
                    toValue: 50,
                    duration: 1500,
                    useNativeDriver: true
                },
                Animated.timing(
                    animacion1, {
                        toValue: 160,
                        duration: 1500,
                        useNativeDriver: true
                    }
                )
            )
        ]).start();
    }, []);

    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { translateX: animacion2 }
        ]
    }

    return (  
        <>
            <View style={{ alignItems: 'center' }}>
                <Animated.View
                    style={[
                        styles.caja,
                        estiloAnimacion
                    ]}
                >

                </Animated.View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    caja: {
        width: 10,
        height: 10,
        backgroundColor: 'blue'
    }
})

export default Animacion1;