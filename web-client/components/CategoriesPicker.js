import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, Picker, ActivityIndicator} from 'react-native';

import Config from '../constants/Config';


const CategoriesPicker =  props => {
    const [isLoading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(Config.backendEndpoint + '/categories')
          .then((response) => {
            if (!response.ok) {
              Alert.alert('ERROR', 'No connection to Internet');
              dispatch(loginFailed('No connection to Internet'));
            } else {
              return response.json()
            }
          })
          .then((json) => setCategories(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    
    return (
        <View>
            {isLoading ? <ActivityIndicator /> : (
            <View style={styles.pickerContainer}>
              <Text style={styles.text}>Category: </Text>
              <Picker style={styles.picker}
                selectedValue={props.category}
                onValueChange={(itemValue, itemIndex) => props.setCategory(itemValue)}
              >
                <Picker.Item label="--- Select ---" value=""/>
                {categories.map((item, index) => {
                  return (<Picker.Item label={item} value={item} key={item}/>)
                })}
              </Picker>
            </View>
        )}
        </View>
        
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 40
      },
      text: {
        flex: 2,
        textAlign: 'right',
        fontSize: 22
      },
      picker: {
        flex: 4,
        width: '40%',
      }
});

export default CategoriesPicker;