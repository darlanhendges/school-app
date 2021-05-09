import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Keys from '../constansts/keys';

export const NameContext = createContext({
  name: '',
  setName: null,
  signIn: null,
});

export default ({ children }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    (async () => {
      const storedName = await AsyncStorage.getItem(Keys.Name);

      if (storedName) setName(storedName);
    })();
  }, []);

  const signIn = async (name) => {
    await AsyncStorage.setItem(Keys.Name, name);
    setName(name);
  };

  return (
    <NameContext.Provider value={{ name, setName, signIn }}>
      {children}
    </NameContext.Provider>
  );
};
