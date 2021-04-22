import React, { createContext, useState } from 'react';

export const NameContext = createContext({ name: '', setName: null });

export default ({ children }) => {
    const [name, setName] = useState('');

    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider> 
    );
};