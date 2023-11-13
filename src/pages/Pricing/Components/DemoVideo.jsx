import ReactPlayer from "react-player";

const DemoVideo = () => {
    return (
        <div className="lg:mt-32 md:mt-16 mt-12 lg:mb-36 mb-28 lg:mx-16 md:mx-16 mx-6">
            <div>
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Demo Video</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold text-center lg:mx-56">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare.</p>
            </div>
            <div className="flex justify-center mt-20">
                <ReactPlayer controls url="https://youtu.be/LXb3EKWsInQ?si=H6xtxs5Rw5zqFiZU" />
            </div>
        </div>
    );
};

export default DemoVideo;