import { StyleSheet, Text, View } from 'react-native';
// Safe Area Context'ten yeni SafeAreaView'i içe aktarıyoruz
import { SafeAreaView } from 'react-native-safe-area-context'; 

export default function App() {
  return (
    // SafeAreaView'e container stili (flex: 1 ve arkaplan rengi) uygulanır [cite: 49, 50]
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>My Profile App</Text> {/* [cite: 43] */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // Tüm ekranı kaplamak için flex: 1 [cite: 49]
    flex: 1, 
    // Hafif arka plan rengi [cite: 50]
    backgroundColor: '#f0f2f5', 
  },
  content: {
    // View bileşenine dolgu (padding) ekleme [cite: 51]
    padding: 20, 
  },
});