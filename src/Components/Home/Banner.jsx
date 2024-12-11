// react icons
import { CiSearch } from "react-icons/ci";
import { motion } from "motion/react";
import group1 from "../../assets/Motion/group1.jpg"
import group2 from "../../assets/Motion/group2.jpg"

const Banner = () => {

    return (
        <div className="w-full h-full bg-[#FBFBFB] rounded-md">

            {/* header */}
            <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-10 items-center p-8">
                <div className="w-full lg:w-[40%]">
                    <h1 className="text-[40px] sm:text-[60px] font-[600] leading-[45px] sm:leading-[70px]">The <span className="text-color-primary">Easiest Way</span> to Get Your New Job</h1>
                    <p className="text-[18px] text-gray-400 mt-2">Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
                    <div className="relative my-5">
                        <input placeholder="Search here"
                            className="py-3 px-4 w-full outline-none rounded-l-md bg-gray-100" />
                        <button
                            className="h-full absolute top-0 right-0 bg-[#F38160] px-3 text-white text-[1.3rem] rounded-r-md">
                            <CiSearch /></button>
                    </div>
                </div>

                <div className="w-full sm:w-[55%]">
                    <motion.img animate={{ y: [100, 150, 100] }} transition={{ duration: 10, repeat: Infinity }} src={group1} alt="image" className="rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-color-primary w-[400px]" />

                    <motion.img animate={{ x: [100, 150, 100] }} transition={{ duration: 10, repeat: Infinity, delay: 5 }} src={group2} alt="image" className="rounded-t-[40px] w-[400px] rounded-br-[40px] border-l-8 border-b-8 border-color-primary" />

                </div>
            </header>
        </div>
    );
};

export default Banner;