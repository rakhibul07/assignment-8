import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="md:flex justify-between items-center ">
            
            <div className="mt-3 md:mt-0 flex justify-center md:flex-none">
                <img src={"https://i.ibb.co/cw0QvQR/Logo.png"} className="w-40"/>
                
            </div>
            <div>
                <ul className="flex justify-center items-center gap-5 md:gap-4 py-10">
                   <NavLink to={"/"} className={({isActive})=>`font-medium text-lg ${isActive? "text-[#FF444A] underline" : "text-black"}`}>Home</NavLink>
                   <NavLink to={"/donation"} className={({isActive})=>`font-medium text-lg ${isActive? "text-[#FF444A] underline" : "text-black"}`}>Donation</NavLink>
                   <NavLink to={"/statistics"} className={({isActive})=>`font-medium text-lg ${isActive? "text-[#FF444A] underline" : "text-black"}`}>Statistics</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;