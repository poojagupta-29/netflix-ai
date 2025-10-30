
import { BodyBgWrapper } from '../Header/BodyBgWrapper'
import { Buttons } from '../Buttons/Buttons'
import { Inputs } from '../Inputs/Inputs'

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useAuthForm } from './Hook/useAuthForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUser } from '../../utils/userSlice';

export const Signup = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialState = {
        username: '',
        email: '',
        password: ''
    }

    const { authUser, setAuthUser, error, setError, clearForm, handleError } = useAuthForm({ initialState });

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);

        console.log('Email before signup:', authUser.email, authUser.email.length);

        try {
            console.log("authUser before signup:", authUser);

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                authUser.email,
                authUser.password
            );

            const user = userCredential.user; // define this BEFORE using it

            await updateProfile(auth.currentUser, {
                displayName: authUser.username.trim() || authUser.email.split('@')[0],
                photoURL: user.photoURL || "https://i.pravatar.cc/150?img=47"
            });

            // reload user info so Redux gets latest displayName
            await auth.currentUser.reload();

            const updated = auth.currentUser;
            dispatch(addUser({
                name: updated.displayName,
                email: updated.email,
                uid: updated.uid,
                photoURL: updated.photoURL
            }));

            navigate('/browse');

            setTimeout(() => clearForm(), 0);

            console.log('User signed up:', auth.currentUser);




        } catch (error) {
            handleError(error);
        }
    }

    return (
        <div className='signup-page min-h-screen px-3'>
            <BodyBgWrapper />

            <div className="text-center max-w-2xl mx-auto relative z-[1] mt-[100px]">
                <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl mb-6">
                    Unlimited movies, TV shows and more
                </h1>
                <p className="text-white text-lg sm:text-xl mb-4">
                    Starts at ₹149. Cancel at any time.
                </p>
                <p className="text-white text-lg sm:text-xl mb-8">
                    Ready to watch? Enter your details to create or restart your membership
                </p>
                <form className="flex flex-col items-center justify-center gap-2 w-full max-w-xl mx-auto min-h-[62px] text-lg" onSubmit={handleSignup}>

                    <Inputs
                        type="text"
                        placeholder="Name"
                        inputStyle='bg-neutral-900 bg-opacity-80 border border-neutral-500 !h-[62px]'
                        name="username"
                        value={authUser.username}
                        onChange={(e) => setAuthUser({ ...authUser, [e.target.name]: e.target.value })}
                    />

                    <Inputs
                        type="email"
                        placeholder="Email address"
                        inputStyle='bg-neutral-900 bg-opacity-80 border border-neutral-500 !h-[62px]'
                        name="email"
                        value={authUser.email}
                        onChange={(e) => setAuthUser({ ...authUser, [e.target.name]: e.target.value })}
                    />

                    <Inputs
                        type="password"
                        placeholder="Password"
                        inputStyle='bg-neutral-900 bg-opacity-80 border border-neutral-500 !h-[62px]'
                        name="password"
                        autocomplete="current-password"
                        value={authUser.password}
                        onChange={(e) => setAuthUser({ ...authUser, [e.target.name]: e.target.value })}
                    />

                    {error && <p className="text-red-500 mt-4 font-bold">{error}</p>}

                    <Buttons
                        btnText="Get Started"
                        spacing="mb-0 min-w-[200px] h-full min-h-[62px]"
                        width="w-auto"
                        textStyle="rounded text-white font-bold"
                        btnArrow={true}
                        type="submit"
                    />

                </form>


            </div>
        </div>
    )
}
