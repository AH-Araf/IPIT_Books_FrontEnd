/* eslint-disable react/prop-types */

const InputForm = ({ label, h, name, register, type = "text", required = true }) => {
    return (
        <div className="">
            <label className="">
                <span className="">{label}</span>
            </label>
            <br />
            <textarea
                type={type}
                {...register(name, { required: required ? "Required" : true })}
                className={`input a input-bordered ${h} w-96`} 
            />
        </div>
    );
};

export default InputForm;
