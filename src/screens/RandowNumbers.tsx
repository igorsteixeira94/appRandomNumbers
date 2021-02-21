import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const RandomNumbers: React.FC = () => {
  const [number, setNumber] = useState(0);
  const [randomRange, setRandomRange] = useState([0, 50]); // [0] => Representa o valor minimo do range e [1] => valor maximo

  const handleBuildNumber = useCallback(() => {
    const newNumber = Math.floor(
      Math.random() * (randomRange[1] - randomRange[0] + 1) + randomRange[0],
    );
    setNumber(newNumber);
  }, [randomRange]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textButton}>Selecione o intervalo</Text>
      <View style={styles.containerSlider}>
        <Text style={[styles.textRange, { marginRight: 20 }]}>
          {randomRange[0]}
        </Text>
        <MultiSlider
          max={100}
          values={randomRange}
          isMarkersSeparated
          onValuesChange={setRandomRange}
        />
        <Text style={[styles.textRange, { marginLeft: 20 }]}>
          {randomRange[1]}
        </Text>
      </View>

      <Text style={styles.text}>{number}</Text>
      <TouchableOpacity onPress={handleBuildNumber} style={styles.button}>
        <Text style={styles.textButton}>Gerar número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353e4d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 6,
  },
  containerSlider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textRange: {
    color: '#fff',
    fontSize: 15,
  },
});

export default RandomNumbers;
