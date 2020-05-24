import * as WebBrowser from 'expo-web-browser';
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Card from '../components/Card';
import Config from '../constants/Config';
import CategoriesPicker from '../components/CategoriesPicker';

export default function AdvertismentsScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [advertisments, setAdvertisments] = useState([]);
  const [category, setCategory] = useState('');


  const getAdvertisments = () => {
    fetch(Config.backendEndpoint + '/advertisements')
        .then((response) => {
          if (!response.ok) {
            Alert.alert('ERTouchableOpacityROR', 'No connection to Internet');
            dispatch(loginFailed('No connection to Internet'));
          } else {
            return response.json()
          }
        })
        .then((json) => {
          setAdvertisments(json)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  }

  const filterData = (cat) => {
    console.log(cat);
    setCategory(cat);
    setLoading(true);
    fetch(Config.backendEndpoint + '/advertisements/category/' + cat)
        .then((response) => {
          if (!response.ok) {
            Alert.alert('ERTouchableOpacityROR', 'No connection to Internet');
            dispatch(loginFailed('No connection to Internet'));
          } else {
            return response.json()
          }
        })
        .then((json) => {
          setAdvertisments(json)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  }

  const refresh = () => {
    console.log(category);
    if (category === "") {
      getAdvertisments();
    } else {
      filterData(category);
    }
  }

  useEffect(() => {
       getAdvertisments();
      }, []);

    const onPressCardHandler = (item) => {
      navigation.navigate('Advert', item);
    }
  
  return (
    <View style={styles.container}>
      {/* <View style={styles.buttonContainer}>
        <Button title="REFRESH" onPress={refresh} />
      </View> */}
      <CategoriesPicker category={category} setCategory={filterData}/>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={{padding: 10, alignItems: 'center'}}>
        {isLoading ? <ActivityIndicator />: (
          advertisments.map((item, index) => {
            return (
            <TouchableOpacity onPress={() => onPressCardHandler(item)}>
              <Card style={styles.cardContainner}>
              <Text style={{fontSize: 24, textAlign: 'left', flex: 7}}>{item.title}</Text>
              <View style={{flex: 3}}>
                <Text style={{color: 'gold', fontSize: 20}}>{item.price}</Text>
                <Text>{item.category}</Text>
              </View>
            </Card>
            </TouchableOpacity>
            )
          })
          
        )}
        </View>
      </ScrollView>
    </View>
  );
}

AdvertismentsScreen.navigationOptions = {
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
  cardContainner: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    maxWidth: '80%'
  }
});
