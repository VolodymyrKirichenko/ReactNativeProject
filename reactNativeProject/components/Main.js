import {Alert, Button, StyleSheet} from 'react-native';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { gStyle } from '../styles/style';
import { useState } from 'react';
import Form from './Form';
import ListItems from './ListItems';

export default function Main({ navigation }) {
  const loadScene = (item) => {
    navigation.navigate('FullInfo', item)
  }
  
  const [news, setNews] = useState([
    {id: '1', name: 'Google', overview: 'Google LLC (Google), a subsidiary of Alphabet Inc, is a provider of search and advertising services on the internet. The company focuses on various business areas such as advertising, search, platforms and operating systems, and enterprise and hardware products. Its portfolio of products and services include Google Search, Google Chrome, Google Docs, Google Calendar, Google Photos, Google Meet, Google Drive, Google Finance, Google Play Books, Google News, Google Earth, Google Ad Manager, Google Play, AdMob, Google Maps, AdSense, Gmail, Google Groups, and YouTube among others. The company has business presence across the Americas, Europe, Asia-Pacific, Africa and the Middle East. Google is headquartered in Mountain View, California, the US.', img: 'https://cdn.vox-cdn.com/thumbor/OL7DhOr7h8yJgNaOFufI2Ym8-q8=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg'},
    {id: '2', name: 'Apple', overview: 'Apple Inc. (formerly Apple Computer Inc.) is an American computer and consumer electronics company famous for creating the iPhone, iPad and Macintosh computers. Apple is one of the largest companies globally with a market cap of over 2 trillion dollars.', img: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png'},
    {id: '3', name: 'Facebook', overview: 'Facebook is the ultimate social network. It\'s a platform primed for sharing every kind of content, from articles and ads to live video, memes and more. With more than a billion active users worldwide, the potential for your business is immense.', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png'}
  ]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  const handleAdd = (el) => {
    setNews((list) => {
      return [
        ...list,
        el
      ]
    })
  }
  
  const handleDelete = (id) => {
    setNews((list) => {
      return list.filter(el => el.id !== id)
    });
  }
  
  const handleShowForm = () => {
    Alert.alert(
    'Show Form',
    'Do you want to show the form?',
    [
      {
        text: 'No',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => setIsFormVisible(true),
      },
    ],
    { cancelable: false }
    );
  };
  
  
  return (
    <View style={gStyle.main}>
      <Text style={[gStyle.title, styles.header]}>
        Головна сторінка
      </Text>
  
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleShowForm}
          title="Do u Wanna add something?"
          disabled={isFormVisible}
        />
      </View>
  
      {isFormVisible && (
        <Form
          addHandler={handleAdd}
          setIsFormVisible={setIsFormVisible}
        />
      )}
  
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <ListItems
            item={item}
            onDelete={handleDelete}
            loadScene={loadScene}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  itemImage: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});
