
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import logo from "../../assets/job.png"

const Footer = () => {
    return (
        <div className="pt-12 w-full">
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-8">
                <div className="space-y-4">
                    <div className="flex gap-4 items-center">
                        <img className="w-[40px]" src={logo} alt="" />
                        <p className="text-2xl font-bold">Job Hunter</p>
                    </div>
                    <p className="font-medium text-xl">Subscribe</p>
                    <div>
                        <p className="font-medium mb-2">Get 10% off your order</p>
                        <div className='w-full relative'>
                            <input
                                type='email'
                                placeholder='Enter Your Email'
                                className='border bg-color-primary-d border-solid outline-none placeholder:text-color-text border-color-primary py-3 pl-4 pr-[50px]  w-full rounded-md' />

                            <span className='absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer text-color-primary'>
                                <IoSend />
                            </span>
                        </div>
                    </div>

                </div>

                <div className="space-y-4">
                    <h2 className="font-semibold text-2xl">Support</h2>
                    <p>Notabaria, Chatmohor, Pabna, Bangladesh</p>
                    <p>tariqul.developer@gmail.com</p>
                    <p>+8801743892058</p>
                </div>
                <div className="space-y-4">
                    <h2 className="font-semibold text-2xl">Support</h2>
                    <p>My account</p>
                    <p>Login/Register</p>
                    <p>All movies</p>
                    <p>Add Movies</p>
                    <p>My Favorites</p>
                </div>
                <div className="space-y-4">
                    <h2 className="font-semibold text-2xl">Quick Link</h2>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="space-y-4">
                    <h2 className="font-semibold text-2xl">Download App</h2>
                    <p className="dark:text-color-text-d/50 ">Save $3 app new user only</p>
                    <div className="flex gap-4">
                        <div>
                            <img className="w-full h-full" src="https://i.postimg.cc/7h3hyqZC/download.png" alt="" />
                        </div>
                        <div>
                            <img className="w-full h-full" src="https://i.postimg.cc/0js5nh09/play-apple.png" alt="" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-10">
                        <FaFacebookF size={25} />
                        <FaXTwitter size={25} />
                        <FaInstagram size={25} />
                        <FaLinkedinIn size={25} />
                    </div>
                </div>
            </div>
            <p className="text-center py-4 border-t border-solid border-color-primary-d">&copy; Copyright <span className="text-lg font-semibold">Job Hunter</span> {new Date().getFullYear()}. All Right Reserved</p>
        </div>
    );
};

export default Footer;
