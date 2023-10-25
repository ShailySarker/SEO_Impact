import { useState } from "react";


const Toggle = () => {
    // Step 1: Set up your component and state variable.
    const [isChecked, setIsChecked] = useState(false);
    
    // Step 2: Create a function to handle the toggle state.
    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    
    return (
        <label className="toggle toggle-info toggle-lg">
            <input
                type="checkbox"
                checked={isChecked} // Use the state variable to set the initial checked state.
                onChange={handleToggle} // Attach the handleToggle function to the onChange event.
            />
            <span className="toggle-mark"></span>
        </label>
    );
};

export default Toggle;