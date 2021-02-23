import React, { useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, PlatformColor } from 'react-native';

import Button from './components/Button';
import RangeComponents from './components/RangeComponent';

const RandomNumbers: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [randomRange, setRandomRange] = useState<number[]>([0, 50]); // [0] => Representa o valor minimo do range e [1] => valor maximo

  const handleBuildNumber = useCallback(() => {
    const newNumber = Math.floor(
      Math.random() * (randomRange[1] - randomRange[0] + 1) + randomRange[0],
    );
    setNumber(newNumber);
  }, [randomRange]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Selecione o intervalo</Text>
      <RangeComponents
        randomRange={randomRange}
        setRandomRange={setRandomRange}
      />
      <Text style={styles.text}>{number}</Text>
      <Button onPress={handleBuildNumber}>Gerar número</Button>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
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
