import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
// import AuthContext from "./AuthContext";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(user);

    const socialAuth = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const authData = {
        createUser,
        loginUser,
        logoutUser,
        socialAuth,
        loading,
        user
    }
    return (
        <authContext.Provider value={authData}>
            {children}
        </authContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}

export { AuthProvider }