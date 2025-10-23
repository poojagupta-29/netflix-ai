import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AppLayout;