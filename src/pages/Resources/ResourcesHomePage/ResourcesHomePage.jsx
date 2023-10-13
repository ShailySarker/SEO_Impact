
const ResourcesHomePage = () => {
    return (
        <div className="mt-12 ml-16">

            <div className="flex items-center border-2 py-2 px-7 w-96 rounded-xl bg-[#E5E5E5] mb-12">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6a6 6 0 100 12a6 6 0 000-12z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-5-5"
                    />
                </svg>
                <input
                    type="search"
                    name=""
                    placeholder="Search your domain, URL, or keyword.."
                    className="bg-[#E5E5E5] ml-4 w-full outline-none"
                />
            </div>
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