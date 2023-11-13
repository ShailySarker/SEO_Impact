import './ProgressBarRed.css';


const ProgressBarRed = () => {
    return (
        <div>
            <progress
                className="flex items-center progress custom1-progress h-5 w-64"
                value="50"
                max="100"
            ></progress>
        </div>
    );
};

export default ProgressBarRed;