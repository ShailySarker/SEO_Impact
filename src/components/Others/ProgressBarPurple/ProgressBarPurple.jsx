import "./ProgressBarPurple.css";

const ProgressBarPurple = () => {
    return (
        <div>
            <progress
                className="flex items-center progress custom3-progress h-5 w-64 "
                value="100"
                max="100"
            ></progress>
        </div>
    );
};

export default ProgressBarPurple;