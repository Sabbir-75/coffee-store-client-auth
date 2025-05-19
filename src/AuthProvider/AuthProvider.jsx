import React, { createContext } from 'react';
import { auth } from '../firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const valueContext = {
        createAccount,
        signIn
    }

    return (
        <AuthContext value={valueContext}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;