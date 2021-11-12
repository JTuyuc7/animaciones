import React, { useState, useEffect } from 'react';
import { Text, View, Animated, StyleSheet } from 'react-native';

const Animacion1 = () => {

    const [ animacionTiming ] = useState( new Animated.Value(14) );

    useEffect(() => {
        Animated.timing(
            animacionTiming, {
                toValue: 40,
                duration: 1000,
                //useNativeDriver: true
            }
        ).start()
    },[])

    return (
        <>
            <View>
                { /* Animacion Timing Text */}
                <Animated.Text style={[styles.texto, { fontSize: animacionTiming }]}>Animacion Timing</Animated.Text>
            </View>
        </>
        
    );
}

const styles = StyleSheet.create({
    texto: {
        //fontSize: 25,
        color: "#FFF",
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
export default Animacion1;