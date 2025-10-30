import { Buttons } from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useLocation } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector(store => store.user);
    console.log('Header user:', user);

    const handleSignout = async () => {
        await signOut(auth);
        console.log("User signed out");
        navigate('/login');
    }

    const handleSignin = () => {
        navigate('/login');
    }

    return (
        <div className="header bg-gradient-to-b from-black/70 to-transparent">
            <div className="header-inner w-[80%] mx-auto flex items-center justify-between py-4">
                <div className="logo">
                    <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" className="w-[190px] h-auto relative z-[1]" />
                </div>

                <div className="signin-btn relative z-[1]">
                    {location.pathname !== "/login" && (

                        user ? (

                            <div className="flex items-center gap-4 relative">

                                {/* Avatar (slightly overlapping text) */}
                                <div className="relative -ml-4 flex items-center gap-2">
                                    <p className="text-white text-base md:text-lg font-medium tracking-wide">
                                        <span className="font-semibold">{user.name}</span>
                                    </p>
                                    <img
                                        src={user.photoURL}
                                        alt={user.name}
                                        className="w-9 h-9 rounded-full object-cover border-2 border-gray-700 hover:scale-105 transition-transform duration-200 shadow-md absolute -top-[17px] right-[39px] -z-[1]"
                                    />
                                </div>

                                {/* Sign Out Button */}
                                <Buttons
                                    btnText="Sign Out"
                                    spacing="mb-0 min-w-[90px] h-full min-h-[40px]"
                                    width="w-auto"
                                    textStyle="rounded bg-red-600 hover:bg-red-700 text-white font-bold transition-colors duration-200"
                                    btnArrow={false}
                                    type="submit"
                                    onClick={handleSignout}
                                />
                            </div>


                        ) : (
                            <Buttons
                                btnText="Sign In"
                                spacing="mb-0 min-w-[90px] h-full min-h-[40px]"
                                width="w-auto"
                                textStyle="rounded text-white font-bold"
                                btnArrow={false}
                                type="submit"
                                onClick={handleSignin}
                            />
                        )
                    )}

                </div>
            </div>

        </div>
    )
}

export default Header;