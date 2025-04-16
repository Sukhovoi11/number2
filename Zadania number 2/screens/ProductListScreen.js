import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ShoppingList from '../components/ShoppingList';
import { ProductsContext } from '../context/ProductsContext';
import { styles } from '../style/styles';


export default function ProductListScreen({ navigation, setIsLoggedIn }) {
  const { filteredProducts, deleteProduct, toggleBought } = useContext(ProductsContext);

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="Dodaj" onPress={() => navigation.navigate('AddProduct')} />
        <Button title="Filtruj" onPress={() => navigation.navigate('Filter')} />
        <Button title="Wyloguj" onPress={() => setIsLoggedIn(false)} />
      </View>
      <ShoppingList
        products={filteredProducts}
        onDelete={deleteProduct}
        onToggleBought={toggleBought}
        onPressItem={(product) => navigation.navigate('ProductDetails', { product })}
      />
    </View>
  );
}


