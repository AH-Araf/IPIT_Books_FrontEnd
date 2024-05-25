/* eslint-disable react/prop-types */


const SelectionForm = ({ label, name, register, options }) => {
    return (
        <div className="mx-3">
            <label className="mx-3">
                <span className="">{label}</span>
            </label>
            <br />
            <select
                {...register(name)}
                className="w-96 input input-bordered a "
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectionForm;
