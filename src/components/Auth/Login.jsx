import { useAuthForm } from './Hook/useAuthForm'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase';

import { Link } from 'react-router-dom'

import { BodyBgWrapper } from '../Header/BodyBgWrapper'
import { Buttons } from '../Buttons/Buttons'
import { Inputs } from '../Inputs/Inputs'

export const Login = () => {

    const { authUser, setAuthUser, error, setError, clearForm, handleError } = useAuthForm({ initialState: { email: '', password: '' } });

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, authUser.email, authUser.password);
            clearForm();
            console.log('User signed up:', userCredential.user);
        } catch (error) {
            handleError(error);
        }
    }

    return (
        <div className="login-page min-h-screen authpage">

            <BodyBgWrapper />

            <div className="relative z-10 px-4 pb-3 w-[80%] mx-auto">
                <div className="flex items-center justify-center bg-black bg-cover max-w-[480px] mx-auto">
                    <div className="w-full max-w-md bg-black rounded px-8 py-10 shadow-lg">
                        <h2 className="text-3xl font-bold text-white mb-6">Log In</h2>

                        <form onSubmit={handleLogin}>

                            <div className="mb-4">
                                <Inputs
                                    type="email"
                                    placeholder="Email address"
                                    inputStyle='bg-neutral-900 bg-opacity-80 border border-neutral-500 !h-[62px]'
                                    name="email"
                                    value={authUser.email}
                                    onChange={(e) => setAuthUser({ ...authUser, [e.target.name]: e.target.value })}
                                />
                            </div>

                            <div className="mb-6">
                                <Inputs
                                    type="password"
                                    placeholder="Password"
                                    inputStyle='bg-neutral-900 bg-opacity-80 border border-neutral-500 !h-[62px]'
                                    name="password"
                                    autocomplete="current-password"
                                    value={authUser.password}
                                    onChange={(e) => setAuthUser({ ...authUser, [e.target.name]: e.target.value })}
                                />
                            </div>

                            {error && <p className="text-red-500 my-4 font-bold">{error}</p>}

                            <Buttons
                                type="submit"
                            />

                            <div className="flex items-center justify-center my-3">
                                <div className="border-b border-neutral-700 flex-grow"></div>
                                <span className="mx-3 text-neutral-400">OR</span>
                                <div className="border-b border-neutral-700 flex-grow"></div>
                            </div>

                            <Buttons
                                btnText="Use a sign-in code"
                                bgColor='bg-neutral-700 bg-opacity-50'
                                textStyle='text-neutral-400 font-medium'
                            />


                            <div className="flex justify-between items-center text-sm mt-3">
                                <Link to={'/'} className="text-white hover:underline">Forgot password?</Link>
                            </div>
                            <div className="flex items-center mt-5">
                                {/* <input id="remember" type="checkbox" checked className="form-checkbox text-red-600 bg-neutral-800 border-neutral-800 rounded mr-2" /> */}
                                <label htmlFor="remember" className="text-neutral-400 select-none">Remember me</label>
                            </div>
                            <div className="mt-6 text-neutral-400 text-sm">
                                New to Netflix?
                                <Link to={'/signup'} className="text-white font-semibold hover:underline"> Sign up now.</Link>
                            </div>
                            <p className="mt-3 text-xs text-neutral-500">
                                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                                <Link to={'/'} className="text-blue-400 underline">Learn more.</Link>
                            </p>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}
