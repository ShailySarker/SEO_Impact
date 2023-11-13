import diamond from '../../../assets/images/Home/CompanyOverview_diamond.png';

const CircleDiamond = () => {
    return (
        <div className='rounded-full p-4 w-20 h-20 bg-[#007BFE] relative bottom-[280px] left-48 -mb-10'>
            <img className="relative top-[6px]" src={diamond} alt="diamond" />
        </div>
    );
};

export default CircleDiamond;