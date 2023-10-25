
const ContactUs = () => {
    return (
        <div className="my-12">
            <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl text-center lg:mb-36 md:mb-28 mb-20">Contact Us</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:mx-0 md:mx-36 mx-6 lg:mb-40 mb-20 lg:gap-0 md:gap-28 gap-16">
                <div>
                    <img className="w-auto lg:h-[440px]"  src="https://i.ibb.co/1QVyPwJ/Rectangle-135.png" alt="" />
                </div>
                <div className="lg:ml-44 lg:mr-24 md:mx-10">
                    <form>
                        <div className="card-body">
                            <div className="form-control">
                                <input
                                    required
                                    type="text"
                                    name="from_name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control my-5">
                                <input
                                    required
                                    type="email"
                                    name="from_email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control ">
                                <textarea
                                    required
                                    name="message"
                                    type="text"
                                    placeholder="Description"
                                    className="textarea textarea-bordered h-28"
                                />
                            </div>
                            <input
                                type="submit"
                                value="Send"
                                className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 lg:w-32 w-24 rounded-xl font-semibold mt-14 mx-auto"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;