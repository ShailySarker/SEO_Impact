
const ResourcesHomePage = () => {
    return (
        <div className="mt-12 ml-16">
            <search></search>
            <div className="flex justify-between gap-5 mt-16">
                <h2 className="font-bold text-5xl "><span className="text-[#007BFE]">Experience</span> seamless elegance on the go </h2>
                <img src="https://i.ibb.co/Npg5LBV/Group-187.png" alt="" />
            </div>
            <div className="mt-36 flex flex-col items-center gap-16">
                <input className="border-2 py-3 px-7 w-80 rounded-lg" type="search" name="" id="" placeholder="Enter your website...." />
                <button className="text-white bg-[#007BFE] py-3 px-6 rounded-xl w-36 font-semibold">Check Score</button>
            </div>
        </div>
    );
};

export default ResourcesHomePage;