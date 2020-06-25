import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, Alert, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Config from '../constants/Config';


export default function AdvertScreen({ route, navigation}) {
  const { title } = route.params;
  const { category } = route.params;
  const { price } = route.params;
  const { createTime } = route.params;
  const { description} = route.params;
  const { id } = route.params;
  const time = new Date(createTime);

  const deleteButtonHandler = () => {
    


    Alert.alert(
      "Delete warning",
      "Do you want delete this advertisment?",
      [
        {
          text: "NO",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "YES", onPress: () => {
          fetch(Config.backendEndpoint + '/advertisements/' + id, {
            method: 'DELETE',
            })

            .then((response) => {
              if (!response.ok) {
                Alert.alert('ERROR', 'No connection to Internet');
              } else {
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Root'}]
                });
              }
            })
            .catch((error) => console.error(error));
        }}
      ],
      { cancelable: false }
    );
  }


  return (
    

    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.advertContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>Created time: {time.toLocaleString()}</Text>
          <View style={styles.row}>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
          <Text style={{paddingTop: 10}}>Description:</Text>
          <View style={{height: 100}}>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={{padding: 20}}>
            <Button 
              style={styles.button}
              title="DELETE"
              color='red'
              onPress={deleteButtonHandler}>
              </Button>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
}

AdvertScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  advertContainer: {
    padding: 10,
    paddingLeft: 20
  },
  time: {
    paddingTop: 10
  },
  title: {
    fontSize: 40
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingTop: 20
  },
  category: {
    fontSize: 24,
    color: 'blue'
  },
  price: {
    fontSize: 30,
    color: 'gold'
  },
  description: {
    paddingTop: 10,
    fontSize: 20,
    fontStyle: "italic"
  },
  button: {
    
    color: 'red'
  }

});
