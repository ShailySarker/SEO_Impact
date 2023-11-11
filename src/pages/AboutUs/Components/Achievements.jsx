import trophy from '../../../assets/images/AboutUs/Achievements_trophy.png';

const achievementsData = [
    {
        id: 1,
        image: trophy,
        achievementName: "International Awards",
        details: "As best SEO suite software"
    },
    {
        id: 2,
        image: trophy,
        achievementName: "International Awards",
        details: "As best SEO suite software"
    },
    {
        id: 3,
        image: trophy,
        achievementName: "International Awards",
        details: "As best SEO suite software"
    },
    {
        id: 4,
        image: trophy,
        achievementName: "International Awards",
        details: "As best SEO suite software"
    }
];

const AchievementsInfo = ({ achievement }) => {
    const { id, image, achievementName, details } = achievement;
    return (
        <div className="border-4 border-[#007BFE] rounded-xl lg:px-6 md:px-8 px-4 py-8 flex flex-col bg-[#EBF5FF]">
            <img className='w-52 h-5w-52 mx-auto mt-5' src={image} alt={`Achievement_${id} image`} />
            <h2 className="text-[#007BFE] font-bold lg:text-3xl text-xl text-center pb-5 pt-14">{achievementName}</h2>
            <h2 className="lg:text-2xl text-xl font-semibold text-center pb-4 text-black">{details}</h2>
        </div>
    );
};

const Achievements = () => {
    return (
        <div className="lg:pt-16 md:pt-12 pt-10 lg:mb-40 md:mb-28 mb-24 md:mx-16 mx-6">
            <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10 ">Our Achievements</h3>
            <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold text-center lg:mx-32 md:mx-12 mx-2">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget.</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mx-0 md:mx-12 mx-5 md:gap-10 gap-6 mt-20">
                {
                    achievementsData.map((achievement) => (
                        <AchievementsInfo
                            achievement={achievement}
                            key={achievement.id}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Achievements;