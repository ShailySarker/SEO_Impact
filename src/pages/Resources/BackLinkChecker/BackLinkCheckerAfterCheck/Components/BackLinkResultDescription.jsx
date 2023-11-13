
const BackLinkResultDescription = () => {
    return (
        <div className="my-36 border-2 lg:mx-auto md:mx-12 mx-6 md:py-16 py-10 px-5 md:px-10 rounded-xl lg:w-[832px]">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-3">
                <h4 className="lg:text-3xl text-center md:text-start md:text-2xl text-xl font-semibold text-slate-500" >Domain : </h4>
                <h4 className="lg:text-3xl text-center md:text-start md:text-2xl text-xl font-semibold text-[#379FFF]">https://sms.tcndigital.in</h4>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-3 md:mt-11 mt-12">
                <h4 className="lg:text-3xl md:text-2xl text-xl font-semibold text-slate-500 text-center md:text-start" >Backlinks : </h4>
                <div className="">
                    <select className="select select-ghost w-1/5 lg:text-3xl md:text-2xl text-xl font-semibold text-slate-500 px-0 py-0 md:mx-0 mx-28">
                        <option selected>7</option>
                        <option>6</option>
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-3 md:mt-8 mt-11">
                <h4 className="lg:text-3xl md:text-2xl text-xl font-semibold text-slate-500 text-center md:text-start" >Do - Follow : </h4>
                <h4 className="lg:text-3xl md:text-2xl text-xl font-semibold text-slate-500 text-center md:text-start">7</h4>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-3 md:mt-11 mt-12">
                <h4 className="lg:text-3xl md:text-2xl text-xl font-semibold text-slate-500 text-center md:text-start" >First - Seen - </h4>
                <h4 className="lg:text-3xl md:text-2xl text-xl font-semibold text-slate-500 text-center md:text-start">2022 - 10 - 15 13:39:29 +00.00</h4>
            </div>
        </div>
    );
};

export default BackLinkResultDescription;