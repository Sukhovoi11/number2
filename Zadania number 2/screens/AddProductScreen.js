import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ProductsContext } from '../context/ProductsContext';
import { styles } from '../style/styles';


export default function AddProductScreen({ navigation }) {
  const { addProduct } = useContext(ProductsContext);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    store: '',
    image: '',
  });

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Brak uprawnień do galerii');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setProduct({ ...product, image: result.assets[0].uri });
    }
  };

  const handleAdd = () => {
    if (!product.name || !product.price || !product.store) {
      Alert.alert('Wypełnij wymagane pola');
      return;
    }
    addProduct({ ...product, price: parseFloat(product.price) });
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nazwa"
        value={product.name}
        onChangeText={(text) => setProduct({ ...product, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Opis"
        value={product.description}
        onChangeText={(text) => setProduct({ ...product, description: text })}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Cena"
        keyboardType="numeric"
        value={product.price}
        onChangeText={(text) => setProduct({ ...product, price: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Sklep"
        value={product.store}
        onChangeText={(text) => setProduct({ ...product, store: text })}
      />

      {product.image ? (
        <Image source={{ uri: product.image }} style={styles.imagePreview} />
      ) : null}
      <Button title="Wybierz zdjęcie z galerii" onPress={pickImage} />

      <View style={{ height: 10 }} />
      <Button title="Dodaj produkt" onPress={handleAdd} />
    </ScrollView>
  );
}


