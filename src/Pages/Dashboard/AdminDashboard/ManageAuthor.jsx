import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthorDetails from "./AuthorDetails";
import Loader from "../../Shared/Loader/Loader";
import { imageUpload } from "../../../api/utils";
import { getAllAuthors, postAuthor } from "../../../api/author";

const ManageAuthor = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        // Fetch all authors when the component mounts
        getAllAuthors()
            .then(data => setAuthors(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means it only runs once on mount

    const handleAdd = async (data) => {
        setIsLoading(true); // Show loader
        const image = data.image[0];

        try {
            const imgData = await imageUpload(image);

            if (imgData.success) {
                const newAuthor = {
                    AuthorName: data.AuthorName,
                    image: imgData.data.url,
                };

                const result = await postAuthor(newAuthor);

                // Update authors state with the new author
                setAuthors(prevAuthors => [...prevAuthors, result]);

                setIsLoading(false); // Hide loader

                // Use SweetAlert for a nicer notification
                Swal.fire({
                    title: 'Added Successfully',
                    icon: 'success',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown',
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp',
                    },
                });

                reset();
                navigate('/dashboard/ManageAuthor');
            }
        } catch (error) {
            console.error("Error uploading image or adding author:", error);
            setIsLoading(false); // Hide loader in case of error
        }
    };

    return (
        <div data-aos="zoom-in">
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <Loader />
                </div>
            )}
            <h2 className="text-3xl bg-slate-300 text-center p-2">Add Author</h2>

            <div className="flex justify-center mt-10 rounded-xl mx-20 py-6">

                <form className="" onSubmit={handleSubmit(handleAdd)}>
                    <section className="">
                        <div className="">
                            <label className=""> <span className="">Author Name</span></label> <br />
                            <textarea type="text" {...register("AuthorName", {
                                required: "Required"
                            })} className="input input-bordered w-96 a" />
                        </div>
                        <div className="mt-5">
                            <label className=""> <span className="">Add Author Image</span></label> <br />
                            <input type="file" {...register("image", {
                                required: "Image is Required"
                            })} className="input input-bordered w-96 a" />
                        </div>
                    </section>
                    <input className='btn btn-accent w-full mt-4' value="Add Author" type="submit" />
                </form>
            </div>
            <div className="mt-20 m-8 e rounded-2xl">
                <AuthorDetails authors={authors} setAuthors={setAuthors} />
            </div>
        </div>
    );
};

export default ManageAuthor;
