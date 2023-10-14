
const BackLinkResultDescription = () => {
    return (
        <div className="my-28 border-2 mr-48 py-16 px-16 rounded-xl">
            <div className="flex gap-[114px]">
                <h4 className="text-3xl font-semibold text-slate-500" >Domain : </h4>
                <h4 className="text-3xl font-semibold text-[#379FFF]">https://sms.tcndigital.in</h4>
            </div>
            <div className="flex gap-[72px] mt-8">
                <h4 className="text-3xl font-semibold text-slate-500" >Backlinks : </h4>
                <div className="">
                    <select className="select select-ghost w-full max-w-xs text-3xl font-semibold text-slate-500">
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
            <div className="flex gap-16 mt-8">
                <h4 className="text-3xl font-semibold text-slate-500" >Do - Follow : </h4>
                <h4 className="text-3xl font-semibold text-slate-500">7</h4>
            </div>
            <div className="flex gap-16 mt-8">
                <h4 className="text-3xl font-semibold text-slate-500" >First - Seen - </h4>
                <h4 className="text-3xl font-semibold text-slate-500">2022 - 10 - 15 13:39:29 +00.00</h4>
            </div>
        </div>
    );
};

export default BackLinkResultDescription;