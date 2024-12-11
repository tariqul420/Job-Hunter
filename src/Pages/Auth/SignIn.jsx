import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/Icon/google.png"
import Lottie from "lottie-react";
import spaceLogIn from "../../assets/Lottie/space-sign-in.json"
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
    const { loginUser } = useContext(authContext)
    const navigate = useNavigate()

    const handelSignIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(() => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Email & Password not valid",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div className="flex gap-8 my-20">
            <div className="flex flex-col w-[60%] items-end justify-center">
                <div className="space-y-2">
                    <h2 className="w-[435px] text-5xl font-bold text-center">Member Login</h2>
                    <p className="font-medium text-color-text/70 text-center w-[435px]">Access to all features. No credit card required.</p>
                </div>

                <div>
                    <button className="flex gap-4 items-end justify-center w-[435px] mx-auto border border-gray-300 py-2 rounded-md mt-8 hover:text-color-primary transition-all duration-300 hover:-translate-y-1">
                        <img className="w-8" src={google} alt="" />
                        <span className="font-semibold text-lg">Sign up with Google</span>
                    </button>

                    <div className="w-[435px] mx-auto my-4 flex items-center justify-center gap-3">
                        <hr className="w-[45%] bg-gray-400 h-[2px]" />
                        <p>or</p>
                        <hr className="w-[45%] bg-gray-400 h-[2px]" />
                    </div>
                </div>

                <form onSubmit={handelSignIn} className="space-y-4" action="">
                    <div className="w-[435px] mx-auto">
                        <label htmlFor="email" className="text-[15px] font-[400]">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            className="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
                        />
                    </div>

                    <div className="w-[435px] mx-auto">
                        <label htmlFor="password" className="text-[15px] font-[400]">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="********"
                            className="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
                        />
                    </div>

                    <button className="w-[435px] mx-auto border bg-color-text hover:bg-color-primary py-[15px] text-white rounded-md mt-8 transition-all text-lg font-medium duration-300 hover:-translate-y-1" type="submit">Login</button>
                </form>

                <div className="flex items-center mt-6 justify-center gap-1 w-[435px]">
                    <span className="text-[1rem] text-gray-600 font-[500]">
                        Don&apos;t have an Account?{" "}
                    </span>
                    <span>
                        <Link to="/register" className="text-[1rem] hover:text-color-primary font-[500]">
                            Register
                        </Link>
                    </span>
                </div>
            </div>
            <div className="w-[40%]">
                <Lottie animationData={spaceLogIn}></Lottie>
            </div>
        </div>
    );
};

export default SignIn;