import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProductListScreen from '../screens/ProductListScreen';
import AddProductScreen from '../screens/AddProductScreen';
import FilterScreen from '../screens/FilterScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator({ isLoggedIn, setIsLoggedIn, setUserEmail }) {
  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <>
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => (
              <LoginScreen
                {...props}
                setIsLoggedIn={setIsLoggedIn}
                setUserEmail={setUserEmail} // 👈 передаём сюда
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: 'Rejestracja' }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="ProductList" options={{ title: 'Lista produktów' }}>
            {(props) => <ProductListScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
          <Stack.Screen
            name="AddProduct"
            component={AddProductScreen}
            options={{ title: 'Dodaj produkt' }}
          />
          <Stack.Screen
            name="Filter"
            component={FilterScreen}
            options={{ title: 'Filtruj' }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={{ title: 'Szczegóły produktu' }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
