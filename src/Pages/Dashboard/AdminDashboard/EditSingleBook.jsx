import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { updateBook } from "../../../api/books";
import Swal from "sweetalert2";

const EditSingleBook = () => {
    const bookData = useLoaderData();
    const navigate = useNavigate();

    const {
        bookName,
        image,
        Writer,
        Price,
        Publishers,
        NumberofPage,
        BookType,
        LastUpdate,
        Description,
        ReadMore,
        _id
    } = bookData;

    const [formData, setFormData] = useState({
        bookName,
        image,
        Writer,
        Price,
        Publishers,
        NumberofPage,
        BookType,
        LastUpdate,
        Description,
        ReadMore,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateBook(_id, formData);
            Swal.fire({
                icon: 'success',
                title: 'Updated Successfully!',
                text: `${bookName} has been updated.`,
                showConfirmButton: false,
                timer: 3000
            })
            navigate(`/dashboard/ManageBooks`);
        } catch (error) {
            console.error("Error updating book:", error);
        }
    };

    // Inline style for background image
    const backgroundImageStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px', // Adjust the height as needed
        position: 'relative', // Required for absolute positioning of overlay
    };

    // Inline style for overlay div
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust opacity here (0.5 for semi-transparent)
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
    };

    return (
        <div>
            <div style={backgroundImageStyle}>
                <div className="flex flex-col" style={overlayStyle}>
                    <img className="h-48 w-36 rounded-xl border-2 border-white e" src={image} alt="" />
                    <h2 className="text-md font-bold mt-3">{bookName}</h2>
                </div>
            </div>

            <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
                <h2 className="text-2xl font-bold mb-4">Edit Book</h2>
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Book Name:</span>
                        </label>
                        <input
                            type="text"
                            name="bookName"
                            value={formData.bookName}
                            onChange={handleChange}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Writer:</span>
                        </label>
                        <input
                            type="text"
                            name="Writer"
                            value={formData.Writer}
                            onChange={handleChange}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price:</span>
                        </label>
                        <input
                            type="number"
                            name="Price"
                            value={formData.Price}
                            onChange={handleChange}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Publishers:</span>
                        </label>
                        <input
                            type="text"
                            name="Publishers"
                            value={formData.Publishers}
                            onChange={handleChange}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Number of Pages:</span>
                        </label>
                        <input
                            type="number"
                            name="NumberofPage"
                            value={formData.NumberofPage}
                            onChange={handleChange}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description:</span>
                        </label>
                        <textarea
                            name="Description"
                            value={formData.Description}
                            onChange={handleChange}
                            className="textarea textarea-bordered h-40"
                        ></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">ReadMore:</span>
                        </label>
                        <textarea
                            name="ReadMore"
                            value={formData.ReadMore}
                            onChange={handleChange}
                            className="textarea textarea-bordered h-40"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-success text-white">Update Book</button>
                </form>
            </div>
        </div>

    );
};

export default EditSingleBook;
