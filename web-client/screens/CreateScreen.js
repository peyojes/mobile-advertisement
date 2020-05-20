
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Picker, Text, ActivityIndicator, Alert } from 'react-native';

import InputForm from '../components/InputForm';
import CategoriesPicker from '../components/CategoriesPicker'

export default function CreateScreen() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const titleInputHandler = input => {
    setTitle(input);
  }

  const priceInputHanler = input => {
    setPrice(input);
  }

  const descriptionInputHandler = input => {
    setDescription(input);
  }


  return (
    <View style={styles.container}>
      <CategoriesPicker
        category={category}
        setCategory={setCategory}/>
     
        <InputForm
          name='Title'
          value={title}
          onChangeText={titleInputHandler}
        />

        <InputForm
          name='Price'
          value={price}
          onChangeText={priceInputHanler}
          keyboardType="number-pad"
          
        />

        <InputForm 
          style={{height: 400}}
          name='Descrip'
          value={description}
          onChangeText={descriptionInputHandler}
          numberOfLines={15}
          multiline={true}
        />
      
    </View>
  );
}

CreateScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingRight: 20
  },
  contentContainer: {
    paddingTop: 30,
  },
  // pickerContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   paddingRight: 40
  // },
  // text: {
  //   flex: 2,
  //   textAlign: 'right',
  //   fontSize: 22
  // },
  // picker: {
  //   flex: 4,
  //   width: '40%',
  // }

});
