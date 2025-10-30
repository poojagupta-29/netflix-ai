import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";


const AppLayout = () => {

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