import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";

const App = () => {
    return (
        <div className="w-11/12 min-h-screen flex flex-col mx-auto text-color-text">
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default App;