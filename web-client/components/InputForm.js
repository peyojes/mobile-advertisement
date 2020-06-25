import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Input from '../components/Input'

const InputForm = props => {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.text}>{props.name} : </Text>
        <Input
          style={{...styles.input, ...props.style}}
          blurOnSubmit
          value={props.value}
          autoCapital='none'
          autoCorrect={false}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingRight: 40,
  },
  text:{
    flex: 2,
    textAlign: 'right',
    fontSize: 22,
  },
  input: {
    flex: 4,
    width: '40%',
    fontSize: 18,
    textAlignVertical: 'top'
  } 
});

export default InputForm;