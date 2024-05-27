import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { getUserData, updateUser } from "../../../api/getAdmin";
import { imageUpload } from "../../../api/utils";
import Loader from "../../Shared/Loader/Loader";
import Swal from "sweetalert2";
import Title from "../../../ReuseableComponents/Title";

const DashboardProfile = () => {
    const { user } = useContext(AuthContext);

    const [userData, setUserData] = useState([]);
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData(user?.email);
            setUserData(data);
            if (data.length > 0) {
                setName(data[0].name); 
            }
        };

        if (user?.email) {
            fetchUserData();
        }
    }, [user?.email]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            let imageUrl = userData[0]?.image; 

            if (image) {
                const imgData = await imageUpload(image);
                if (imgData.success) {
                    imageUrl = imgData.data.url;
                }
            }

            const updatedUser = {
                name,
                image: imageUrl,
            };

            await updateUser(user?.email, updatedUser);
            setIsLoading(false);

            setUserData(prevData => prevData.map(user =>
                user.email === user?.email ? { ...user, name: updatedUser.name, image: updatedUser.image } : user
            ));

            Swal.fire({
                icon: 'success',
                title: 'Profile Updated',
                text: 'Your profile has been updated successfully!',
            });
        } catch (error) {
            console.error("Error updating user data:", error);
            setIsLoading(false);

            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: 'There was an error updating your profile. Please try again.',
            });
        }
    };

    return (
        <div className="" data-aos="zoom-in">
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <Loader />
                </div>
            )}
            {userData.map(b => (
                <div key={b._id}>
                    <div className="rounded-lg font-bold flex flex-col justify-center items-center p-10 m-10 bg-slate-300">
                        <img className="h-24 w-24 rounded-full border-2 border-slate-500 p-1" src={b.image} alt="" />
                        <p>Name: {b.name}</p>
                        <p>Email: {b.email}</p>
                        <p className="text-emerald-600">Role: {b.role}</p>
                    </div>
                </div>
            ))}
            <form className="flex flex-col justify-center items-center" onSubmit={handleUpdate}>
                <Title a="Update Your Profile" />
                <div>
                    <label className="font-bold">Name:</label><br />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Update name"
                        className="border-2 border-black mb-4 w-72"
                    />
                </div>
                <div>
                    <label className="font-bold">Upload Image:</label> <br />
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="border-2 border-black mb-4 w-72"
                    />
                </div>
                <div className="flex justify-center">
                    <button className="btn btn-success" type="submit">Update Profile</button>
                </div>
            </form>
        </div>
    );
};

export default DashboardProfile;
