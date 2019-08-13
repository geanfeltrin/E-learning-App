import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'appResindecia',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );
  return persistedReducer;
};
