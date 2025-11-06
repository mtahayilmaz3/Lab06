import { StyleSheet, Text, View, ScrollView } from 'react-native'; // ScrollView eklendi
import { SafeAreaView } from 'react-native-safe-area-context'; 

// components klasöründen ProfileCard bileşenini içe aktarıyoruz
import ProfileCard from './components/ProfileCard'; 

// Profil verileri (Part 3, Task 2)
// NOT: require('./assets/...') ile kendi indirdiğin resimlere bağlamalısın.
const PROFILE_DATA = [
  { 
    id: '1', 
    name: 'Mehmet Taha Yılmaz', 
    role: 'Computer Scientist', 
    imageSource: { uri: 'https://media.licdn.com/dms/image/v2/D5603AQHH1WamRpztOg/profile-displayphoto-shrink_800_800/B56ZNk.i91GgAc-/0/1732565939032?e=1764201600&v=beta&t=qpC79_LMAknjUw-u37Y62lk_oLdmfrYpfqPdirxCN4U' } 
  },
  { 
    id: '2', 
    name: 'Göktuğ Varan', 
    role: 'Computer Scientist', 
    imageSource: { uri: 'https://media.licdn.com/dms/image/v2/D5603AQGDWpc-9-Q5AQ/profile-displayphoto-shrink_800_800/B56ZNlSDkpG4Ac-/0/1732571053982?e=1764201600&v=beta&t=xMtVEmjvE8nV948F-Rxc1peZXSO3diU-Bh2B8eLLQEQ' } 
  },
  { 
    id: '3', 
    name: 'Berkay Deniz', 
    role: 'Inventor & Actress', 
    imageSource: { uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGTJH0GvKuKBg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710336576705?e=1764201600&v=beta&t=sG8Ww-wf60ch83caAxmktQUebm9VzXfE0VyKg6zxnm0' } 
  },
  // Ekranı doldurmak ve kaydırmayı test etmek için 4. bir profil ekleyelim
  { 
    id: '4', 
    name: 'Beril Güngör', 
    role: 'Mechanical Engineer', 
    imageSource: { uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGBUjl1aiJ35A/profile-displayphoto-crop_800_800/B4DZijo2N4GsAI-/0/1755092052175?e=1764201600&v=beta&t=u_gF5XiT06te6uD1KlqCln_c8FKMx00Ub5IsdUxiAEc' } // Örnek olarak tekrar kullandım
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* ScrollView, içeriğin ekrandan taşması durumunda kaydırmayı sağlar (Part 3, Task 3) */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text style={styles.headerText}>My Profile App</Text>

          {/* Profil Kartlarını Listeleme */}
          {PROFILE_DATA.map(profile => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              role={profile.role}
              imageSource={profile.imageSource}
            />
          ))}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f0f2f5', 
  },
  // ScrollView içeriği için stil.
  // contentContainerStyle, ScrollView içindeki View'in stilidir.
  scrollViewContent: {
    flexGrow: 1, // İçeriğin büyümesine izin ver
    paddingBottom: 20, // Listenin altından da kaydırılabilirlik için boşluk
  },
  content: {
    paddingTop: 20, // SafeAreaView'dan sonra üst boşluk
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  }
});