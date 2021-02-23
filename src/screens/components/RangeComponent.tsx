import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { Container } from './styles';
interface RangeProps {
  randomRange: number[];
  setRandomRange: (randomRange: number[]) => void;
}

const RangeComponents: React.FC<RangeProps> = ({
  randomRange,
  setRandomRange,
}) => {
  return (
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

export default RangeComponents;
