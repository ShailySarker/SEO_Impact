
const CompanyOverview = () => {
    return (
        <div className="mt-28 mb-24 lg:flex grid md:grid-cols-2 grid-cols-1 lg:px-20 md:px-24 px-16 justify-center gap-28">
            <div className="">
                <div className="-mb-10">
                    <h1 className="text-6xl rounded-full py-24 px-[87px] bg-[#f92f613f] font-bold">5M</h1>
                    <img className="rounded-full p-5 w-20 bg-[#F92F60] relative mb:bottom-[270px] bottom-[250px] md:left-52 left-48" src="https://i.ibb.co/8j5GPZ3/Vector-1.png" alt="" />
                </div>
                <div className="flex text-center flex-col">
                    <h4 className="font-bold text-xl">Marketing professions </h4>
                    <p className="text-[#757575] text-lg">are using SEO Impact!</p>
                </div>
            </div>
            <div className="">
                <div className="-mb-10">
                    <h1 className="text-6xl rounded-full p-24 bg-[#f92f613f] font-bold">21</h1>
                    <img className="rounded-full p-5 w-20 bg-[#FF5C00] relative mb:bottom-[270px] bottom-[250px] md:left-52 left-48" src="https://i.ibb.co/P1hQ504/Vector-2.png" alt="" />
                </div>
                <div className="flex text-center flex-col">
                    <h4 className="font-bold text-xl">International Awards <span className="text-[#757575] text-lg font-normal">as </span></h4>
                    <p className="text-[#757575] text-lg">best SEO suite software</p>
                </div>
            </div>
            <div className="">
                <div className="-mb-10">
                    <h1 className="text-6xl rounded-full py-24 px-[71px] bg-[#EBF5FF] font-bold">30%</h1>
                    <img className="rounded-full p-5 w-20 bg-[#007BFE] relative mb:bottom-[270px] bottom-[250px] md:left-52 left-48" src="https://i.ibb.co/8j5GPZ3/Vector-1.png" alt="" />
                </div>
                <div className="flex text-center flex-col">
                    <h4 className="font-bold text-xl">Over 300 Companies</h4>
                    <p className="text-[#757575] text-lg text-center "> use SEO Impact as their <br />Marketing tool!</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyOverview;