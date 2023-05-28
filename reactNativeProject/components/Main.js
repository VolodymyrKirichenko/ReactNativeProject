import { StyleSheet } from 'react-native';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { gStyle } from '../styles/style';
import { useState } from 'react';

export default function Main({ navigation }) {
  const loadScene = (item) => {
    navigation.navigate('FullInfo', item)
  }
  
  const [news, setNews] = useState([
    {id: '1', name: 'Google', anons: 'Google!!!', overview: 'Google is cool!', img: 'https://cdn.vox-cdn.com/thumbor/OL7DhOr7h8yJgNaOFufI2Ym8-q8=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg'},
    {id: '2', name: 'Apple', anons: 'Apple!!!', overview: 'Apple is cool!', img: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png'},
    {id: '3', name: 'Facebook', anons: 'Facebook!!!', overview: 'Facebook is cool!', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png'}
  ]);
  
  return (
    <View style={gStyle.main}>
      <Text style={[gStyle.title, styles.header]}>
        Головна сторінка
      </Text>
      
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => loadScene(item)}
          >
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
})
