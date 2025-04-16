import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, ScrollView } from 'react-native';
import { ProductsContext } from '../context/ProductsContext';
import { styles } from '../style/styles';


export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params || {};
  const { products, toggleBought } = useContext(ProductsContext);

  if (!product) {
    Alert.alert("Błąd", "Brak danych produktu.");
    navigation.goBack();
    return null;
  }

  const index = products.findIndex(
    p => p.name === product.name && p.price === product.price && p.store === product.store
  );

  const handleToggle = () => {
    if (index !== -1) {
      toggleBought(index);
      navigation.goBack();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      {product.image ? (
        <Image source={{ uri: product.image }} style={styles.image} />
      ) : null}
      <Text style={styles.text}>🏬 Sklep: {product.store}</Text>
      <Text style={styles.text}>💰 Cena: {product.price} zł</Text>
      {product.description ? <Text style={styles.text}>📝 Opis: {product.description}</Text> : null}
      <Text style={styles.text}>✅ Kupiony: {product.bought ? 'Tak' : 'Nie'}</Text>
      <Button
        title={product.bought ? 'Oznacz jako niekupione' : 'Oznacz jako kupione'}
        onPress={handleToggle}
      />
      <View style={{ height: 10 }} />
      <Button title="Wróć" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}


