import React, { useState, useEffect } from 'react';
import { Text, View, Animated, StyleSheet } from 'react-native';

const Animacion1 = () => {

    const [ animacionTiming ] = useState( new Animated.Value(0) );

    useEffect(() => {
        Animated.timing(
            animacionTiming, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start()
    },[])

    return (
        <>
            <Animated.View
                style={{
                    opacity: animacionTiming
                }}
            >
                { /* Animacion Timing */}
                <Text style={styles.texto}>Animacion Timing</Text>
            </Animated.View>
        </>
        
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 25,
        color: "#FFF",
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
export default Animacion1;