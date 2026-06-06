import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token) {
            try {
                // Safely slice and split the JWT token segment to read the email/id strings
                const payloadBase64 = token.split('.')[1];
                const decodedPayload = JSON.parse(atob(payloadBase64));
                
                // Set the default display string. Since your login controller maps 
                // data.name, we read it or default gracefully to "User"
                setUser({ name: decodedPayload.name || "User" });
            } catch (error) {
                console.error("Invalid token parsing state:", error);
                handleLogout(null);
            }
        } else {
            setUser(null);
        }
    }, [token]);

    const handleLogin = (newToken) => {
        localStorage.setItem("token", newToken);
        setToken(newToken);
    };

    const handleLogout = (clearCartCallback) => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
        if (clearCartCallback && typeof clearCartCallback === "function") {
            clearCartCallback();
        }
    };

    return (
        <AuthContext.Provider value={{ token, user, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};