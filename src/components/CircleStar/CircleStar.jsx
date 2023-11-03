import star from '../../assets/images/Home/CompanyOverview/star.png';

const CircleStar = () => {
    return (
        <div className='rounded-full p-4 w-20 h-20 bg-[#FF5C00] relative bottom-[280px] left-48 -mb-10'>
            <img className="relative bottom-[2px]" src={star} alt="star" />
        </div>
    );
};

export default CircleStar;