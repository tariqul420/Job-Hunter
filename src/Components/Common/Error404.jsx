import Lottie from "lottie-react";
import error404 from "../../assets/Lottie/error404.json"
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="flex items-center flex-col">
            <Lottie className="w-[600px] mx-auto" animationData={error404} />
            <button className="uppercase w-[435px] mx-auto border bg-color-primary py-[15px] text-white rounded-md mt-8 transition-all text-lg font-medium duration-300 hover:-translate-y-1">
                <Link to="/">Back to home</Link>
            </button>
        </div>
    );
};

export default Error404;