import photo from "../../../assets/images/Careers/ContactRecruiter_photo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactRecruiter = () => {
    return (
        <div className="md:pt-8 pt-0 mb-36 lg:mx-16 md:mx-16 mx-6">
            <div>
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Contact Our <span className="text-[#007BFE]">Recruiters</span></h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold lg:mx-36 text-center ">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget.</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:mx-52 lg:gap-24 md:gap-5 gap-16 md:mt-24 mt-20">
                <div className="border-2 hover:border-[#007BFE] shadow-lg rounded-xl py-4 lg:px-10 px-5 flex flex-col">
                    <LazyLoadImage
                        className="border-4 border-[#007BFE] rounded-full lg:p-3 p-4 mx-auto mt-5 w-56 h-56"
                        src={photo}
                        alt="Recruiter Photo"
                    />
                    <h3 className="font-bold pt-5 lg:text-4xl md:text-3xl text-2xl text-center">Merry Leo</h3>
                    <p className="pt-4 md:text-xl text-lg font-semibold text-center border-b-2 pb-6">Senior Recruiter, SEO Impact</p>
                    <p className="pt-6 md:text-xl text-lg font-medium text-slate-500">Email: merry@gmail.com</p>
                    <p className="pt-3 md:text-xl text-lg font-medium text-slate-500">Mobile: +9999999999</p>
                    <p className="pt-3 md:text-xl text-lg font-medium text-slate-500 pb-5">LinkedIn: merryLeolinkedIn.com</p>
                </div>
                <div className="border-2 hover:border-[#007BFE] shadow-lg rounded-xl py-4 lg:px-10 px-5 flex flex-col">
                    <LazyLoadImage
                        className="border-4 border-[#007BFE] rounded-full lg:p-3 p-4 mx-auto mt-5 w-56 h-56"
                        src={photo}
                        alt="Recruiter Photo"
                    />
                    <h3 className="font-bold pt-5 lg:text-4xl md:text-3xl text-2xl text-center">Rio Anna</h3>
                    <p className="pt-4 md:text-xl text-lg font-semibold text-center border-b-2 pb-6">Recruiter, SEO Impact</p>
                    <p className="pt-6 md:text-xl text-lg font-medium text-slate-500">Email: anna@gmail.com</p>
                    <p className="pt-3 md:text-xl text-lg font-medium text-slate-500">Mobile: +9999999990</p>
                    <p className="pt-3 md:text-xl text-lg font-medium text-slate-500 pb-5">LinkedIn: rioAnnaolinkedIn.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactRecruiter;