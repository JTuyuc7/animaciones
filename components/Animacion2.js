import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, Animated, StyleSheet, TouchableHighlight } from 'react-native';

const { width, height } = Dimensions.get('screen');

const Animacion2 = () => {

    const [ animacionTiming ] = useState( new Animated.Value(50) );

    //useEffect(() => {
    //    Animated.timing(
    //        animacionTiming, {
    //            toValue: 420,
    //            duration: 1500,
                //useNativeDriver: true
    //        }
    //    ).start()
    //},[])

    const startAnimated = () => {
        Animated.timing(
            animacionTiming, {
                toValue: 420,
                duration: 1500,
                //useNativeDriver: true
            }
        ).start()
    }

    return (
        <>
            <Animated.View
                style={[ styles.caja, { height: animacionTiming} ]}
            >
                { /* Animacion Timing */}
                <Text>Contenido</Text>

            </Animated.View>

            <View style={{ paddingHorizontal: 15}}>
                <TouchableHighlight
                    onPress={ () => startAnimated()}
                    style={{ backgroundColor: 'red', height: 50, marginTop: 10, paddingHorizontal: 15, borderRadius: 20, flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={{ textAlign: 'center', color: "#FFF", fontWeight: 'bold'}}>Show More</Text>
                </TouchableHighlight>
            </View>
        </>
        
    );
}

const styles = StyleSheet.create({
    caja: {
        width: '100%',
        height: 100,
        backgroundColor: 'yellow'
    }
})
export default Animacion2;