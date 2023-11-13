import heart from '../../../assets/images/Home/CompanyOverview_heart.png';

const CircleHeart = () => {
    return (
        <div className='rounded-full p-4 w-20 h-20 bg-[#F92F60] relative bottom-[280px] left-48 -mb-10'>
            <img className="relative top-1" src={heart} alt="heart" />
        </div>
    );
};

export default CircleHeart;