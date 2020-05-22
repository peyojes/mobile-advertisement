
import React, { useState } from 'react'
import { StyleSheet, View, Button, Alert } from 'react-native';

import InputForm from '../components/InputForm';
import CategoriesPicker from '../components/CategoriesPicker'
import Config from '../constants/Config';


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

  const saveButtonHandler = () => {
    let body = {
      title: title,
      price: price,
      category: category,
      description: description
    }
    console.log(body);
    fetch(Config.backendEndpoint + '/advertisements', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }})
      .then((response) => {
        if (!response.ok) {
          Alert.alert('ERROR', 'No connection to Internet');
        } else {
          return response.json()
        }
      })
      .then((response) => {
        console.log(response.createTime);
        body["createTime"] = response.createTime;
        body = response;
      })
      .catch((error) => console.error(error));
      console.log(body);
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
        <Button title='SAVE' onPress={saveButtonHandler}/>
      
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
});
