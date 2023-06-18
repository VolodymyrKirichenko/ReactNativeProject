import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
} from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.main}>
      <Image
        style={ gStyle.image }
        source={{ uri: route.params.img }}
      />
      
      <Text style={gStyle.title}>
        {route.params.name}
      </Text>
  
      <Text style={styles.overview}>
        {route.params.overview}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  overview: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#f55151'
  }
})
