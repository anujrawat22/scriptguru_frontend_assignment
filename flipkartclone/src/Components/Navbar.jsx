import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { AiOutlineMore } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiBellOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="w-dvw h-14 flex justify-around px-10 bg-white z-10 fixed">
            <div className="sm:hidden w-10 flex items-center justify-center">
                <GiHamburgerMenu />
            </div>
            <div className="w-32">
                <img src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png" alt="logo" className="w-full h-full object-cover" />
            </div>
            <div className="w-2/5 flex items-center ">
                <input type="text" placeholder="Search for Products , Brands and More" className="w-full h-9 focus:outline-none bg-slate-200 rounded pl-5 " />
            </div>
            <div className="xs:hidden lg:flex w-1/3  justify-around py-2 bg-white ">
                <button className="w-24 rounded flex justify-around items-center text-lg px-2 hover:bg-blue-400 hover:text-white "><FaRegUserCircle />Login</button>
                <button className="w-24 rounded flex justify-around items-center text-lg px-3"><AiOutlineShoppingCart />Cart</button>
                <button className="w-38 rounded flex justify-around items-center text-lg"><CiGift />Become a Seller</button>
                <div className="relative group flex items-center justify-center">
                    <button className="w-12 text-lg flex justify-center items-center hover:border rounded p-2"><AiOutlineMore /></button>
                    <div className="hidden absolute  bg-white border rounded top-8 w-52 text-gray-700 group-hover:flex-col group-hover:flex">
                        <button className="flex w-full justify-start items-center h-8 hover:bg-slate-200 "><CiBellOn className="mr-1" />Notification Preference</button>
                        <button className="flex justify-center items-center h-8 hover:bg-slate-200"><TfiHeadphoneAlt className="mr-1" />24x7 Customer Care</button>
                        <button className="flex justify-center items-center h-8 hover:bg-slate-200"><HiOutlineArrowUpRight className="mr-1" />Advertise</button>
                        <button className="flex justify-center items-center h-8 hover:bg-slate-200"><MdOutlineFileDownload className="mr-1" />Download App</button>
                    </div>
                </div>
            </div>
            <div className="xs:flex sm:hidden">
                <button className="w-20 flex justify-center items-center"><CiUser />Login</button>
                <button className="w-12 flex justify-center items-center"><AiOutlineShoppingCart/></button>
            </div>
        </div>
    )
}

export default Navbar