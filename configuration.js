import {createStore, compose, applyMiddleware} from 'redux';
import reducers from './src/Redux/reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import RNBootSplash from 'react-native-bootsplash';

//REDUX SETUP

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cartReducer','favProducts','products'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [thunk];
const store = createStore(
  persistedReducer,
  {},
  compose(applyMiddleware(...middleware)),
);
const persistor = persistStore(store, {}, () => {
    RNBootSplash.hide();
});

export {store, persistor};
