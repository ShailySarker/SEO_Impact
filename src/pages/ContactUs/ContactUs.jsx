
const ContactUs = () => {
    return (
        <div className="my-12">
            <h2 className="font-bold text-5xl text-center mb-36">Contact Us</h2>
            <div className="grid grid-cols-2 items-center mb-24">
                <div>
                    <img src="https://i.ibb.co/1QVyPwJ/Rectangle-135.png" alt="" />
                </div>
                <div className="ml-44 mr-24">
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
                                className="text-white bg-[#007BFE] py-3 px-6 rounded-xl font-semibold mt-10 mx-28"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;