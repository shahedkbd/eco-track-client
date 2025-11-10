import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const AuthInfo={
        user,
        setUser,
        loading,
        setLoading

    }
    return (
        <AuthContext value={AuthInfo}>{children}</AuthContext>
    )
};

export default AuthProvider;