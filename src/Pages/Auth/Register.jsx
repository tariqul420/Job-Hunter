import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/Icon/google.png"
import Lottie from "lottie-react";
import space from "../../assets/Lottie/space.json"
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = useContext(authContext)
    const navigate = useNavigate()

    const handelRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const rePassword = form.rePassword.value

        console.log(name, email, password, rePassword);

        createUser(email, password)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Register Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "user Already Exist",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="flex gap-8 my-20">
            <div className="flex flex-col w-[60%] items-end justify-center">
                <div className="space-y-2">
                    <h2 className="text-5xl font-bold">Start for free today</h2>
                    <p className="font-medium text-color-text/70 text-center">Access to all features. No credit card required.</p>
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

                <form onSubmit={handelRegister} className="space-y-4" action="">
                    <div className="w-[435px] mx-auto">
                        <label htmlFor="name" className="text-[15px] font-[400]">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
                        />
                    </div>

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

                    <div className="w-[435px] mx-auto">
                        <label htmlFor="rePassword" className="text-[15px] font-[400]">
                            Re-Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="rePassword"
                            placeholder="********"
                            className="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
                        />
                    </div>

                    <button className="w-[435px] mx-auto border bg-color-text hover:bg-color-primary py-[15px] text-white rounded-md mt-8 transition-all text-lg font-medium duration-300 hover:-translate-y-1" type="submit">Register</button>
                </form>

                <div className="flex items-center mt-6 justify-center gap-1 w-[435px]">
                    <span className="text-[1rem] text-gray-600 font-[500]">
                        Already have an account?{" "}
                    </span>
                    <span>
                        <Link to="/sign-in" className="text-[1rem] hover:text-color-primary font-[500]">
                            Sign in
                        </Link>
                    </span>
                </div>
            </div>
            <div className="w-[40%]">
                <Lottie animationData={space}></Lottie>
            </div>
        </div>
    );
};

export default Register;