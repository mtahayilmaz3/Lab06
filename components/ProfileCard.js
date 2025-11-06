import React from 'react';
// TouchableOpacity ve Alert, Part 4'te kullanılacak ama şimdiden ekleyebiliriz.
import { StyleSheet, Text, View, Image, Platform, TouchableOpacity, Alert } from 'react-native';

// Bileşen, dışarıdan (App.js'ten) prop'ları (özellikleri) kabul eder.
// Name, Role ve ImageSource prop'larını alacak.
const ProfileCard = ({ name, role, imageSource }) => {
  
  // Part 4: İnteraktivite için handlePress fonksiyonu
  const handlePress = () => {
    // Alert yerine custom modal kullanmak daha iyi olsa da, lab kılavuzuna uyuyoruz.
    Alert.alert('Profil Tıklandı', `${name}'in profiline dokundunuz.`);
  };

  return (
    // Part 4: Kartı tıklanabilir yapmak için TouchableOpacity ile sarıyoruz
    <TouchableOpacity onPress={handlePress} style={styles.cardContainer}>
      {/* Ana kapsayıcı View (Card) */}
      <View style={styles.card}>
        {/* 1. Avatar Resmi */}
        <Image 
          style={styles.avatar} 
          source={imageSource} 
          // Resim yüklenemezse diye bir placeholder ekleyebiliriz (gerçek resimler Part 3'te eklenecek)
          defaultSource={require('../assets/placeholder.png')} 
        />

        {/* 2. İsim */}
        <Text style={styles.name}>{name}</Text>

        {/* 3. Rol */}
        <Text style={styles.role}>{role}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Stillerin Tanımlanması
const styles = StyleSheet.create({
  cardContainer: {
    // TouchableOpacity'nin stili, kartın kapsayıcısını kontrol eder
    marginVertical: 10, // Kartlar arasında boşluk bırak
    width: '90%', 
    alignSelf: 'center', // Kartı ekranın ortasına hizala
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12, // Yumuşak köşeler
    alignItems: 'center', // İçeriği yatayda ortala

    // Gölge Stilleri (Platforma Özgü Stil)
    // Part 2, Task 4: Shadow (iOS) ve Elevation (Android)
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3, // Android için gölge
      },
    }),
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Dairesel yapmak için genişliğin yarısı
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#e0e0e0', // Hafif bir çerçeve
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: '#777', // Gri renk
  },
});

export default ProfileCard;