import React, { createContext, useState } from 'react';

export const UserContext = createContext ({});


export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    function logOutUser () {
        setUser(false)
    }

    function logInUser () {
        setUser(true)
    }

    const data = {
        user,
        logOutUser,
        logInUser
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
}