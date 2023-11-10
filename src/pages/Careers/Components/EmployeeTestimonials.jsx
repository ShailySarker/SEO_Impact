import { LazyLoadImage } from "react-lazy-load-image-component";
import employee from "../../../assets/images/Careers/EmployeeTestimonials_photo.png";

const data = [
    {
        id: 1,
        feedback: "SEO Impact is a great place for working",
        image: employee,
        name: "Rio Ann",
        designation: "UI/UX Designer"
    },
    {
        id: 2,
        feedback: "SEO Impact is a great place for developing skills",
        image: employee,
        name: "Lucy Leo",
        designation: "Product Manager"
    },
    {
        id: 3,
        feedback: "SEO Impact is a great place for learning",
        image: employee,
        name: "Anney Bee",
        designation: "Software Analyst"
    },

];

const EmployeeTestimonialsInfo = ({ item }) => {
    const { feedback, image, name, designation } = item;
    return (
        <div className="border-2 border-[#007BFE] rounded-xl lg:px-6 md:px-8 px-4 py-8 flex flex-col justify-center items-center hover:bg-[#EBF5FF] transition-transform duration-500 ease-in-out transform hover:scale-105">
            <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center pb-10 text-black">“<span className="text-[#007BFE]">{feedback}</span>”</h2>
            <LazyLoadImage
                className="w-48 "
                src={image}
                alt="Employee Photo"
            />
            <h3 className="font-bold pt-7 md:text-3xl text-2xl text-center">{name}</h3>
            <p className="pt-4 md:text-xl text-lg font-semibold text-center border-b-2 pb-6">{designation}, SEO Impact</p>
        </div>
    );
};

const EmployeeTestimonials = () => {
    return (
        <div className="md:pt-8 pt-5 mb-36 lg:mx-16 md:mx-16 mx-6">
            <div>
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Employee Testimonials</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold lg:mx-36 text-center ">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-16 gap-20 mt-20">
                {
                    data.map((item) => (
                        <EmployeeTestimonialsInfo
                            item={item}
                            key={item.id}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default EmployeeTestimonials;