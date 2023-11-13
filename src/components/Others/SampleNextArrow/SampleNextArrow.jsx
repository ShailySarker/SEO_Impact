const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <div className={className}
        style={{ ...style, display: "block", background: "#007BFE" , borderRadius: "50%", padding:"6px", width:"31px", height:"29px", }}
        onClick={onClick}>
            
        </div>
    );
};

export default SampleNextArrow;