import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const AppLayout = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // user logged in or signed up
                dispatch(addUser({
                    name: user.displayName,
                    email: user.email,
                    uid: user.uid,
                    photoURL: user.photoURL
                }));
            } else {
                // user logged out
                dispatch(removeUser());
            }
        });

        return () => unsubscribe(); // cleanup
    }, [dispatch]);

    return (
        <>
            <Header />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default AppLayout;