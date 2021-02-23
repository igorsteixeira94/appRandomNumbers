import React from 'react';
import {
  StyleSheet,
  View,
  PressableProps,
  Pressable,
  Text,
} from 'react-native';

interface ButtonProps extends PressableProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Pressable {...rest} style={styles.button}>
      <Text style={styles.textButton}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
});

export default Button;
