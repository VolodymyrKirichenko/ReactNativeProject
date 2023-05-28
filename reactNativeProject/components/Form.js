import { StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function Form(props) {
  const { addHandler, setIsFormVisible } = props;
  
  const [name, setName] = useState('');
  const [overview, setOverview] = useState('');
  const [imageURL, setImageURL] = useState('');
  
  const onAdd = () => {
    const newItem = {
      id: new Date().getTime().toString(),
      name: name,
      overview: overview,
      img: imageURL,
    };
  
    addHandler(newItem);
    setName('');
    setOverview('');
    setImageURL('');
    setIsFormVisible(false);
  };
  
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Overview"
        value={overview}
        onChangeText={(text) => setOverview(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={imageURL}
        onChangeText={(text) => setImageURL(text)}
      />
      
      <Button title="Додати" onPress={onAdd} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
