import CircleBlue from "../../../components/Others/CircleBlue/CircleBlue";
import CircleDiamond from "../../../components/Others/CircleDiamond/CircleDiamond";
import CircleHeart from "../../../components/Others/CircleHeart/CircleHeart";
import CircleOrange from "../../../components/Others/CircleOrange/CircleOrange";
import CirclePink from "../../../components/Others/CirclePink/CirclePink";
import CircleStar from "../../../components/Others/CircleStar/CircleStar";

const CompanyOverview = () => {
    return (
        <div className="mt-32 mb-24 lg:flex grid md:grid-cols-2 grid-cols-1 lg:px-20 md:px-24 px-16 justify-center gap-28">
            <div className="">
                <CirclePink />
                <CircleHeart />
                <div className="flex text-center flex-col">
                    <h4 className="font-bold text-2xl text-[#000000]">Marketing professions </h4>
                    <p className="text-[#757575] text-2xl font-semibold">are using SEO Impact!</p>
                </div>
            </div>
            <div className="">
                <CircleOrange />
                <CircleStar />
                <div className="flex text-center flex-col">
                    <h4 className="font-bold text-2xl text-[#000000]">International Awards <span className="text-[#757575] text-2xl font-semibold">as </span></h4>
                    <p className="text-[#757575] text-2xl font-semibold">best SEO suite software</p>
                </div>
            </div>
            <div className="">
                <CircleBlue />
                <CircleDiamond />
                <div className="flex text-center flex-col">
                    <h4 className="font-bold text-2xl text-[#000000]">Over 300 Companies</h4>
                    <p className="text-[#757575] text-2xl font-semibold text-center "> use SEO Impact as their <br />Marketing tool!</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyOverview;