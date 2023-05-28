import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function ListItems(props) {
  const { item, onDelete, loadScene} = props;
  
  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.deleteButtonText}>×</Text>
      </TouchableOpacity>
    
      <TouchableOpacity
        style={styles.itemContent}
        onPress={() => loadScene(item)}
      >
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    marginBottom: 30,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  deleteButtonText: {
    fontSize: 24,
    color: 'red',
  },
  itemContent: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
})
