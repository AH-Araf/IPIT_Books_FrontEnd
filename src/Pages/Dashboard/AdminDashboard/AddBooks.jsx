/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { imageUpload } from "../../../api/utils";
import Loader from "../../Shared/Loader/Loader";
import { postBook } from "../../../api/books";
import InputForm from "../../../ReuseableComponents/Form/InputForm";
import ImageForm from "../../../ReuseableComponents/Form/ImageForm";
import SelectionForm from "../../../ReuseableComponents/Form/SelectionForm";


const AddBooks = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleAddBook = async (data) => {
        setIsLoading(true); // Show loader
        const image = data.image[0];

        try {
            const imgData = await imageUpload(image);

            if (imgData.success) {
                const bookDetails = {
                    bookName: data.bookName,
                    image: imgData.data.url,
                    Writer: data.Writer,
                    Price: data.Price,
                    Publishers: data.Publishers,
                    NumberofPage: data.NumberofPage,
                    BookType: data.BookType,
                    LastUpdate: data.LastUpdate,
                    Description: data.Description,
                    ReadMore: data.ReadMore,
                };

                const result = await postBook(bookDetails); // Use the postBook function

                setIsLoading(false);

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
                navigate('/dashboard/AddBooks');
            }
        } catch (error) {
            console.error("Error uploading image or adding book:", error);
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
            <h2 className="text-3xl bg-slate-300 text-center p-2">Add Books Here</h2>

            <div className="flex justify-center mt-10 rounded-xl mx-20 py-6">
                <form className="" onSubmit={handleSubmit(handleAddBook)}>
                    <section className="lg:flex gap-5">
                        <InputForm
                            label="Book Name"
                            name="bookName"
                            register={register}
                            type="text"
                        />
                        <ImageForm
                            label="Add Picture"
                            name="image"
                            register={register}
                        />
                    </section>

                    <section className="lg:flex gap-5">
                        <InputForm
                            label="Writer"
                            name="Writer"
                            register={register}
                            type="text"
                        />
                        <InputForm
                            label="Price"
                            name="Price"
                            register={register}
                            type="text"
                        />
                    </section>

                    <section className="lg:flex gap-5">
                        <InputForm
                            label="Publishers"
                            name="Publishers"
                            register={register}
                            type="text"
                        />
                        <InputForm
                            label="Number of Page"
                            name="NumberofPage"
                            register={register}
                            type="number"
                        />
                    </section>

                    <section className="lg:flex gap-5">
                        <SelectionForm
                            label="Book Type"
                            name="BookType"
                            register={register}
                            options={['Fiction', 'Biography', 'Mystery', 'Science', 'Story', 'Poetry']}
                        />
                        
                        <InputForm
                            label="Last Update"
                            name="LastUpdate"
                            register={register}
                            type="text"
                        />
                    </section>

                    <div className="lg:flex gap-5 mt-4">
                        <InputForm
                            label="Description"
                            name="Description"
                            register={register}
                            type="textarea"
                            h="h-44"
                        />

                        <InputForm
                            label="ReadMore"
                            name="ReadMore"
                            register={register}
                            type="textarea"
                            h="h-44"
                        />
                    </div>

                    <input className='btn btn-accent w-full mt-4 ' value="Add Book" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddBooks;
