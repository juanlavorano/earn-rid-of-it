import React from 'react'
import App from './App.js'
import { AuthProvider } from './src/components/AuthContext'

export default function Wrap() {
    return (
        <AuthProvider>
            <App />
        </AuthProvider>
    )
}
