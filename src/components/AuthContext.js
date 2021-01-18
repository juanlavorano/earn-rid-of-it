import React, { useState, useEffect, useContext } from 'react'
import API from './api'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setCurrentUser()
        setLoading(false)
    }, [])

    function logOut() {
    }

    const value = {
        currentUser,
        setCurrentUser,
        logOut
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>

    )
}
