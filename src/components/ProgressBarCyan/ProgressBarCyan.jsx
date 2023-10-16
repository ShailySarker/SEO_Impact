import './ProgressBarCyan.css';


const ProgressBarCyan = () => {
    return (
        <div>
            <progress
                className="flex items-center progress custom2-progress h-5 w-64 "
                value="80"
                max="100"
            ></progress>
        </div>
    );
};

export default ProgressBarCyan;