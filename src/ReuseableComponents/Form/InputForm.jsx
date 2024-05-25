/* eslint-disable react/prop-types */

const InputForm = ({ label, h, name, register, type = "text", required = true }) => {
    return (
        <div className="mx-3mx-3">
            <label className="mx-3">
                <span className="">{label}</span>
            </label>
            <br />
            <textarea
                type={type}
                {...register(name, { required: required ? "Required" : true })}
                className={`input a input-bordered ${h} w-96 mx-3`} 
            />
        </div>
    );
};

export default InputForm;
