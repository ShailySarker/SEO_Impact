import { useState } from "react";
import { Link } from "react-router-dom";

const CheckBox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <label className="inline-flex items-center space-x-2">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="form-checkbox text-white bg-[#007BFE] h-5 w-5"
                />
                <span className="label-text lg:text-[#B2B2B2] md:text-slate-800 text-[#B2B2B2] font-semibold">I agree to all <Link><span className="font-bold lg:text-[#007BFE] md:text-black text-[#007BFE]">terms and conditions</span></Link></span>
            </label>
        </>
    );
};

export default CheckBox;