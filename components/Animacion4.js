import React, { useState, useEffect } from 'react';
import { Text, View, Animated, StyleSheet } from 'react-native';

const Animacion1 = () => {

    const [ animacionTiming ] = useState( new Animated.Value(0) );

    useEffect(() => {
        Animated.timing(
            animacionTiming, {
                toValue: 360,
                duration: 1000,
                useNativeDriver: true
            }
        ).start()
    },[])

    const interpolacion = animacionTiming.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })

    const estiloAnimacion = {
        transform: [{ rotate: interpolacion }]
    }

    return (
        <>
            <Animated.View
                style={[styles.caja, estiloAnimacion]}
            >
                { /* Animacion Timing Interpolate */}
                
            </Animated.View>
        </>
        
    );
}

const styles = StyleSheet.create({
    caja: {
        //fontSize: 25,
        width: 100,
        height: 100,
        backgroundColor: 'yellow'
    }
})
export default Animacion1;