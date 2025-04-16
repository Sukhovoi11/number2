import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import FilterBar from '../components/FilterBar';
import { ProductsContext } from '../context/ProductsContext';
import { styles } from '../style/styles';


export default function FilterScreen({ navigation }) {
  const {
    filterStore, setFilterStore,
    minPrice, setMinPrice,
    maxPrice, setMaxPrice
  } = useContext(ProductsContext);

  return (
    <View style={styles.container}>
      <FilterBar
        filterStore={filterStore}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onFilterStore={setFilterStore}
        onMinPrice={setMinPrice}
        onMaxPrice={setMaxPrice}
      />
      <Button title="Zamknij" onPress={() => navigation.goBack()} />
    </View>
  );
}


