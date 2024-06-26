import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBookMedical } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { FaBookReader } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { getUserData } from "../api/getAdmin";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { AiFillHome } from "react-icons/ai";




const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData(user?.email);
            setUserData(data);
        };

        if (user?.email) {
            fetchUserData();
        }
    }, [user?.email]);

    const isAdmin = userData.some(a => a.role === "admin");

    return (
        <div>
            <div className="drawer lg:drawer-open  ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <Outlet />
                </div>

                <div className="drawer-side" >
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 min-h-full bg-gray-600 text-white border-e-4 border-red-300">
                        {isAdmin ? (
                            <>
                                <div className="flex flex-col justify-center items-center gap-3 mb-6 pb-6 border-b-2">
                                    <NavLink to="/dashboard/DashboardHome">
                                        <button className="btn btn-circle h- e text-xl  text-green-500">
                                            <MdAdminPanelSettings />
                                        </button>
                                    </NavLink>
                                    <p className="text-green-400 text-lg">Admin</p>
                                </div>
                                <li><NavLink to="/dashboard/DashboardHome"><AiFillHome /> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/DashboardProfile"><CgProfile /> Profile</NavLink></li>
                                <li><NavLink to="/dashboard/AddBooks"><FaBookMedical /> Add Books</NavLink></li>
                                <li><NavLink to="/dashboard/ManageBooks"><FaBookReader /> Manage Books</NavLink></li>
                                <li><NavLink to="/dashboard/OrderList"><FaListAlt /> Order List</NavLink></li>
                                <li><NavLink to="/dashboard/ManageAuthor"><MdManageAccounts /> Manage Author</NavLink></li>
                                <li><NavLink to="/dashboard/Stats"><IoStatsChartSharp /> Stats</NavLink></li>
                                <li><NavLink to="/dashboard/Message"><RiMessage2Line /> Message</NavLink></li>
                                <li><NavLink to="/"><HiOutlineHome /> Back To Home</NavLink></li>
                               
                             
                            </>
                        ) : (
                            <>
                                <li><NavLink to="/dashboard/DashboardHome"><AiFillHome /> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/DashboardProfile"><CgProfile /> Profile</NavLink></li>
                                <li><NavLink to="/dashboard/Cart"><FaShoppingCart />Cart</NavLink></li>
                                <li><NavLink to="/dashboard/MyOrder"><LiaLuggageCartSolid />My Orders</NavLink></li>
                                <li><NavLink to="/"><HiOutlineHome /> Back To Home</NavLink></li>
                               
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
