import { configureStore } from '@reduxjs/toolkit';
import { appStateSlice } from './AuthSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For React Native storage
import { combineReducers } from 'redux';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Combine reducers
const rootReducer = combineReducers({
  appState: appStateSlice.reducer,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serialization check for persisted state
    }),
});

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
