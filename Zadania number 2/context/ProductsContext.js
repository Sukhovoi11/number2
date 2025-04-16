import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children, userEmail }) => {
  const [products, setProducts] = useState([]);
  const [filterStore, setFilterStore] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      if (!userEmail) return;
      try {
        const saved = await AsyncStorage.getItem(`products:${userEmail}`);
        if (saved) {
          setProducts(JSON.parse(saved));
        }
      } catch (error) {
        console.error('Błąd podczas ładowania produktów:', error);
      }
    };
    loadProducts();
  }, [userEmail]);

  useEffect(() => {
    if (!userEmail) return;
    const saveProducts = async () => {
      try {
        await AsyncStorage.setItem(`products:${userEmail}`, JSON.stringify(products));
      } catch (error) {
        console.error('Błąd podczas zapisywania produktów:', error);
      }
    };
    saveProducts();
  }, [products, userEmail]);

  const addProduct = (product) => {
    setProducts([{ ...product, bought: false }, ...products]);
  };

  const deleteProduct = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  const toggleBought = (index) => {
    const updated = [...products];
    updated[index].bought = !updated[index].bought;
    setProducts(updated.sort((a, b) => a.bought - b.bought));
  };

  const filteredProducts = products.filter((p) => {
    const matchesStore = p.store.toLowerCase().includes(filterStore.toLowerCase());
    const price = p.price;
    const minOk = minPrice === '' || price >= parseFloat(minPrice);
    const maxOk = maxPrice === '' || price <= parseFloat(maxPrice);
    return matchesStore && minOk && maxOk;
  });

  return (
    <ProductsContext.Provider
      value={{
        products,
        filteredProducts,
        addProduct,
        deleteProduct,
        toggleBought,
        filterStore,
        setFilterStore,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
