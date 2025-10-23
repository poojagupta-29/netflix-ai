import { useState } from "react";

export const useAuthForm = ({ initialState }) => {
    const [authUser, setAuthUser] = useState(initialState);
    const [error, setError] = useState(null);

    const onChange = (e) => {
        setAuthUser({
            ...authUser, [e.target.name]: e.target.value
        })
    }

    const clearForm = () => {
        setAuthUser(initialState);
        setError(null);
    }

    const handleError = (error) => {
        if (error.code === 'auth/email-already-in-use') {
            setError('The email address is already in use by another account.');
        } else if (error.code === 'auth/invalid-email') {
            setError('The email address is not valid.');
        } else if (error.code === 'auth/weak-password') {
            setError('The password is too weak. It should be at least 6 characters long.');
        } else if (error.code === 'auth/wrong-password') {
            setError('Incorrect password.');
        } else if (error.code === 'auth/user-not-found') {
            setError('No account found with this email.');
        } else if (error.code === 'auth/invalid-credential') {
            setError('Invalid Credentials.');
        } else {
            setError('An error occurred. Please try again.');
        }
    }

    return { authUser, setAuthUser, error, setError, onChange, clearForm, handleError };
}
