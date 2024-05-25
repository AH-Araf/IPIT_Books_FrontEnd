/* eslint-disable react/prop-types */


const ImageForm = ({ label, name, register, required = true }) => {
    return (
        <div className="mx-3">
            <label className="">
                <span className="mx-3">{label}</span>
            </label>
            <br />
            <input
                type="file"
                {...register(name, { required: required ? "Image is Required" : false })}
                className="input input-bordered w-96 a"
            />
        </div>
    );
};

export default ImageForm;
