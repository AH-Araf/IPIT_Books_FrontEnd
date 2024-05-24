
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { getUserData } from "../../../api/getAdmin";


const DashboardHome = () => {

    const { user } = useContext(AuthContext)
    // console.log(user.email)

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

    return (
        <div className="" data-aos="zoom-in">
            {userData.map(b => <div
                key={b._id}
            >
                <div className="d rounded-lg font-bold flex flex-col justify-center items-center p-10 m-10 bg-slate-300">
                    <p>Name: {b.name}</p>
                    <p>Email: {b.email}</p>
                    <p className="text-emerald-600">Role: {b.role}</p>
                </div>
            </div>)}
        </div>
    );
};

export default DashboardHome;