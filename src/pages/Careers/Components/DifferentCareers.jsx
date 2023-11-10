import { Link } from "react-router-dom";
import photo1 from "../../../assets/images/Careers/DifferentCareers_photo1.png";
import photo2 from "../../../assets/images/Careers/DifferentCareers_photo2.png";
import photo3 from "../../../assets/images/Careers/DifferentCareers_photo3.png";
import user from "../../../assets/images/Careers//DifferentCareers_group.png";

const data = [
    {
        id: 1,
        image: photo1,
        title: "Product Designer",
        description: "Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus. Eu aliquam egestas donec facilisi. Accumsan urna consectetur facilisis ante facilisi ut ut."
    },
    {
        id: 2,
        image: photo2,
        title: "Production Development",
        description: "Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus. Eu aliquam egestas donec facilisi. Accumsan urna consectetur facilisis ante facilisi ut ut."
    },
    {
        id: 3,
        image: photo3,
        title: "Marketing",
        description: "Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus. Eu aliquam egestas donec facilisi. Accumsan urna consectetur facilisis ante facilisi ut ut."
    }
];

const DifferentCareersInfo = ({ item }) => {
    const { image, title, description } = item;

    return (
        <div className="border-2 md:p-8 p-6 rounded-lg shadow-xl bg-white">
            <div className="border-b-2 pb-9">
                <img className="mx-auto w-48 h-36" src={image} alt="career based image" />
                <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold md:pt-6 pt-4 text-center">{title}</h3>
            </div>
            <div>
                <h4 className="md:text-lg text-base font-semibold text-slate-400 md:pt-9 pt-6 md:pb-12 pb-8 pr-3">{description}</h4>
                <Link className="flex items-center gap-5 md:p-4 p-3 bg-[#F1F8FF] justify-center mx-7 rounded-lg md:mx-3 ">
                    <img className="md:w-5 w-4" src={user} alt="user" />
                    <p className="md:text-xl text-lg font-semibold text-black">View Openings</p>
                </Link>
            </div>
        </div>
    );
}
const DifferentCareers = () => {
    return (
        <div className="lg:mx-24 md:mx-12 mx-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 relative lg:bottom-[930px] md:bottom-[510px] bottom-[230px] lg:-mb-[750px] md:-mb-[390px] -mb-[160px]">
            {
                data.map((item) => (
                    <DifferentCareersInfo
                        item={item}
                        key={item.id}
                    />)
                )}
        </div>
    );
};

export default DifferentCareers;