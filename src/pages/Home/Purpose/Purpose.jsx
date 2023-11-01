import PurposeBox from "../../../components/PurposeBox/PurposeBox";

const Purpose = () => {
    return (
        <div className="lg:mt-40 md:mt-28 mt-12 mb-28 md:mx-16 mx-6 ">
            <div className="relative md:-mb-[310px] -mb-[200px]">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-24 items-center ">
                    <div className="relative lg:bottom-52 md:bottom-28 bottom-10">
                        <h3 className=" font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Purpose</h3>
                        <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare. Justo curabitur iaculis id senectus sodales mattis sed mattis nis</p>
                    </div>
                    <PurposeBox></PurposeBox>
                </div>
            </div>
        </div>
    );
};

export default Purpose;