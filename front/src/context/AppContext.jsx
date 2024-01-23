// src/context/AppContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getContacts } from '../service/DataFetch';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [contacts, setConatacts] = useState([]);
    useEffect(() => {
        getContacts().then((r) => {
            setConatacts(r.data);
        });
    },[]);
    return (
        <AppContext.Provider value={{ contacts, setConatacts }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
