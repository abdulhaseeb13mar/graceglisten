import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../Screens/Home';
import ProductDetail from '../Screens/ProductDetail';
import Checkout from '../Screens/Checkout';
import SearchScreen from '../Screens/SearchScreen';
import OrderScreen from '../Screens/OrderScreen';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ProductDetail" component={ProductDetail} />
    <Stack.Screen name="Checkout" component={Checkout} />
    <Stack.Screen name='Search' component={SearchScreen}/>
    <Stack.Screen name='Order' component={OrderScreen}/>
  </Stack.Navigator>
);

export default HomeStack;
