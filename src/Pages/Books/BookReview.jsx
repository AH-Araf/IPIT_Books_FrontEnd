/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { getUserData } from "../../api/getAdmin";
import { postReview } from "../../api/books";

const BookReview = ({ bookId, bookName, updateReviews }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useContext(AuthContext);

    const [userData, setUserData] = useState([]);
    const [reviewerName, setReviewerName] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await getUserData(user?.email);
            setUserData(data);
            if (data.length > 0) {
                setReviewerName(data[0].name);
            }
        };

        if (user?.email) {
            fetchUserData();
        }
    }, [user?.email]);

    const onSubmit = async (data, e) => {
        const reviewData = {
            bookId: bookId,
            bookName: bookName,
            review: data.Review,
            reviewerName: reviewerName
        };

        try {
            const newReview = await postReview(reviewData);  // Use the new function
            updateReviews(newReview);

            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Review added successfully",
                showConfirmButton: false,
                timer: 1500
            });

            reset();
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error adding review",
            });
        }
    };

    return (
        <div>
            <div>
                <p className="text-2xl font-serif mb-6 font-se">Book: {bookName}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="flex mt-4 gap-2">
                            <p className="font-semibold">Add review as</p>
                            {userData.map(b => <div key={b._id}>
                                <p><span className="text-blue-600 font-semibold">({b.name})</span></p>
                            </div>)}
                        </label>
                        <textarea
                            type="text"
                            {...register("Review", {
                                required: false
                            })}
                            className="input border-2 border-slate-500 w-full max-w-xs h-32 "
                        />
                    </div>
                    {user ? (
                        <div className="flex justify-center mt-10"><button className="btn btn-success" type="submit">Add Review</button></div>
                    ) : (
                        <p className="font-semibold text-red-600 mt-10">Please login to add a review.</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default BookReview;
