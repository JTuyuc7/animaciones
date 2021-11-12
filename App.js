import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
//import Animacion1 from './components/Animacion1';
//import Animacion2 from './components/Animacion2';
//import Animacion3 from './components/Animacion3';
//import Animacion4 from './components/Animacion4';
//import Animacion1 from './components/spring/Animacion1';
//import Animacion1 from './components/sequence/Animacion1';
import Animacion5 from './components/Animacion5';

const App = () => {
  return (  
    <>  
      <SafeAreaView style={ styles.mainContainer }>
        <View>
          <Text style={styles.textoTitulo}>App Animaciones</Text>
        </View>

        <View>
          {/*<Animacion1 /> */}

          {/*<Animacion2 />*/}

          {/*<Animacion3 />*/}

          {/*<Animacion4 />*/}

          {/*<Animacion1 />*/}

          {/*<Animacion1 /> */}

          <Animacion5 />

        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'cornflowerblue'
  },
  textoTitulo: {
    color: "#FFF",
    textAlign: 'center',
    fontSize: 20,
    marginTop: 40,
    marginBottom: 20
  }
})
export default App;