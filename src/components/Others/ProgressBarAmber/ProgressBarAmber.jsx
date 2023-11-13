import './ProgressBarAmber.css';


const ProgressBarAmber = () => {
    return (
        <div>
          <progress
                className="flex items-center progress custom4-progress h-5 w-64 "
                value="35"
                max="100"
            ></progress>  
        </div>
    );
};

export default ProgressBarAmber;