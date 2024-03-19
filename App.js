import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import João from './SRC/componets/João/main';
import Renan from './SRC/componets/Renan/index';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Renan></Renan>
      <João></João>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
