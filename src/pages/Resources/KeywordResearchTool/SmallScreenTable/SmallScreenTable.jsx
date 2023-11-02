
const SmallScreenTable = () => {
    return (
        <div className='mt-14 grid grid-cols-1 gap-12 md:hidden border-2 rounded-xl border-black p-2'>
            <div className='border-2 rounded-xl border-black'>
                <div className='grid grid-cols-3 text-center font-bold text-lg border-b-2 border-black'>
                    <div className='border-r-2 border-black py-4 bg-orange-100 rounded-tl-xl'>Keyword</div>
                    <div className='border-r-2 py-4 bg-green-300 border-black'>Search Volume</div>
                    <div className='py-4 bg-yellow-100 border-black rounded-tr-xl'>Comp</div>
                </div>
                <div className='grid grid-cols-4 text-center font-bold text-lg'>
                    <div className='border-r-2 py-4 bg-lime-100 border-black rounded-bl-xl'>Comp</div>
                    <div className='border-r-2 py-4 bg-green-100 border-black'>Comp</div>
                    <div className='border-r-2 py-4 bg-purple-200 border-black'>Comp</div>
                    <div className='py-4 bg-pink-100 rounded-br-xl'>Comp</div>
                </div>
            </div>
            {/* row1 */}
            <div className='border-2 rounded-xl border-black'>
                <div className='grid grid-cols-3 text-center font-semibold border-b-2 border-black '>
                    <div className='border-r-2 border-black py-4 bg-orange-100 rounded-tl-xl pt-12'>apple store</div>
                    <div className='border-r-2 py-4 bg-green-300 border-black'>
                        <div className='border-r-2 font-semibold text-[#000000] py-4 px-2 flex flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="100"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </div>
                    </div>
                    <div className='py-4 bg-yellow-100 border-black rounded-tr-xl pt-12'>medium</div>
                </div>
                <div className='grid grid-cols-4 text-center font-semibold '>
                    <div className='border-r-2 py-4 bg-lime-100 border-black rounded-bl-xl'>medium</div>
                    <div className='border-r-2 py-4 bg-green-100 border-black'>medium</div>
                    <div className='border-r-2 py-4 bg-purple-200 border-black'>medium</div>
                    <div className='py-4 bg-pink-100 rounded-br-xl'>medium</div>
                </div>
            </div>
            {/* row2 */}
            <div className='border-2 rounded-xl border-black'>
                <div className='grid grid-cols-3 text-center font-semibold border-b-2 border-black '>
                    <div className='border-r-2 border-black py-4 bg-orange-100 rounded-tl-xl pt-12'>apple watch</div>
                    <div className='border-r-2 py-4 bg-green-300 border-black'>
                        <div className='border-r-2 font-semibold text-[#000000] py-4 px-2 flex flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="65"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </div>
                    </div>
                    <div className='py-4 bg-yellow-100 border-black rounded-tr-xl pt-12'>medium</div>
                </div>
                <div className='grid grid-cols-4 text-center font-semibold '>
                    <div className='border-r-2 py-4 bg-lime-100 border-black rounded-bl-xl'>medium</div>
                    <div className='border-r-2 py-4 bg-green-100 border-black'>medium</div>
                    <div className='border-r-2 py-4 bg-purple-200 border-black'>medium</div>
                    <div className='py-4 bg-pink-100 rounded-br-xl'>medium</div>
                </div>
            </div>
            {/* row3 */}
            <div className='border-2 rounded-xl border-black'>
                <div className='grid grid-cols-3 text-center font-semibold border-b-2 border-black '>
                    <div className='border-r-2 border-black py-4 bg-orange-100 rounded-tl-xl pt-12'>apple tv</div>
                    <div className='border-r-2 py-4 bg-green-300 border-black'>
                        <div className='border-r-2 font-semibold text-[#000000] py-4 px-2 flex flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </div>
                    </div>
                    <div className='py-4 bg-yellow-100 border-black rounded-tr-xl pt-12'>medium</div>
                </div>
                <div className='grid grid-cols-4 text-center font-semibold '>
                    <div className='border-r-2 py-4 bg-lime-100 border-black rounded-bl-xl'>medium</div>
                    <div className='border-r-2 py-4 bg-green-100 border-black'>medium</div>
                    <div className='border-r-2 py-4 bg-purple-200 border-black'>medium</div>
                    <div className='py-4 bg-pink-100 rounded-br-xl'>medium</div>
                </div>
            </div>
            {/* row4 */}
            <div className='border-2 rounded-xl border-black'>
                <div className='grid grid-cols-3 text-center font-semibold border-b-2 border-black '>
                    <div className='border-r-2 border-black py-4 bg-orange-100 rounded-tl-xl pt-12'>steve jobs</div>
                    <div className='border-r-2 py-4 bg-green-300 border-black'>
                        <div className='border-r-2 font-semibold text-[#000000] py-4 px-2 flex flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </div>
                    </div>
                    <div className='py-4 bg-yellow-100 border-black rounded-tr-xl pt-12'>medium</div>
                </div>
                <div className='grid grid-cols-4 text-center font-semibold '>
                    <div className='border-r-2 py-4 bg-lime-100 border-black rounded-bl-xl'>medium</div>
                    <div className='border-r-2 py-4 bg-green-100 border-black'>medium</div>
                    <div className='border-r-2 py-4 bg-purple-200 border-black'>medium</div>
                    <div className='py-4 bg-pink-100 rounded-br-xl'>medium</div>
                </div>
            </div>
            {/* row5 */}
            <div className='border-2 rounded-xl border-black'>
                <div className='grid grid-cols-3 text-center font-semibold border-b-2 border-black '>
                    <div className='border-r-2 border-black py-4 bg-orange-100 rounded-tl-xl pt-12'>apple id</div>
                    <div className='border-r-2 py-4 bg-green-300 border-black'>
                        <div className='border-r-2 font-semibold text-[#000000] py-4 px-2 flex flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </div>
                    </div>
                    <div className='py-4 bg-yellow-100 border-black rounded-tr-xl pt-12'>medium</div>
                </div>
                <div className='grid grid-cols-4 text-center font-semibold '>
                    <div className='border-r-2 py-4 bg-lime-100 border-black rounded-bl-xl'>medium</div>
                    <div className='border-r-2 py-4 bg-green-100 border-black'>medium</div>
                    <div className='border-r-2 py-4 bg-purple-200 border-black'>medium</div>
                    <div className='py-4 bg-pink-100 rounded-br-xl'>medium</div>
                </div>
            </div>
            {/* row6 */}
            <div className='border-2 rounded-xl border-black'>
                <div className='grid grid-cols-3 text-center font-semibold border-b-2 border-black '>
                    <div className='border-r-2 border-black py-4 bg-orange-100 rounded-tl-xl pt-12'>apple discount</div>
                    <div className='border-r-2 py-4 bg-green-300 border-black'>
                        <div className='border-r-2 font-semibold text-[#000000] py-4 px-2 flex flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </div>
                    </div>
                    <div className='py-4 bg-yellow-100 border-black rounded-tr-xl pt-12'>medium</div>
                </div>
                <div className='grid grid-cols-4 text-center font-semibold '>
                    <div className='border-r-2 py-4 bg-lime-100 border-black rounded-bl-xl'>medium</div>
                    <div className='border-r-2 py-4 bg-green-100 border-black'>medium</div>
                    <div className='border-r-2 py-4 bg-purple-200 border-black'>medium</div>
                    <div className='py-4 bg-pink-100 rounded-br-xl'>medium</div>
                </div>
            </div>
            {/* row7 */}
            <div className='border-2 rounded-xl border-black'>
                <div className='grid grid-cols-3 text-center font-semibold border-b-2 border-black '>
                    <div className='border-r-2 border-black py-4 bg-orange-100 rounded-tl-xl pt-12'>apple Usa</div>
                    <div className='border-r-2 py-4 bg-green-300 border-black'>
                        <div className='border-r-2 font-semibold text-[#000000] py-4 px-2 flex flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </div>
                    </div>
                    <div className='py-4 bg-yellow-100 border-black rounded-tr-xl pt-12'>medium</div>
                </div>
                <div className='grid grid-cols-4 text-center font-semibold '>
                    <div className='border-r-2 py-4 bg-lime-100 border-black rounded-bl-xl'>medium</div>
                    <div className='border-r-2 py-4 bg-green-100 border-black'>medium</div>
                    <div className='border-r-2 py-4 bg-purple-200 border-black'>medium</div>
                    <div className='py-4 bg-pink-100 rounded-br-xl'>medium</div>
                </div>
            </div>
            {/* row8 */}
            <div className='border-2 rounded-xl border-black'>
                <div className='grid grid-cols-3 text-center font-semibold border-b-2 border-black '>
                    <div className='border-r-2 border-black py-4 bg-orange-100 rounded-tl-xl pt-12'>apple India</div>
                    <div className='border-r-2 py-4 bg-green-300 border-black'>
                        <div className='border-r-2 font-semibold text-[#000000] py-4 px-2 flex flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </div>
                    </div>
                    <div className='py-4 bg-yellow-100 border-black rounded-tr-xl pt-12'>medium</div>
                </div>
                <div className='grid grid-cols-4 text-center font-semibold '>
                    <div className='border-r-2 py-4 bg-lime-100 border-black rounded-bl-xl'>medium</div>
                    <div className='border-r-2 py-4 bg-green-100 border-black'>medium</div>
                    <div className='border-r-2 py-4 bg-purple-200 border-black'>medium</div>
                    <div className='py-4 bg-pink-100 rounded-br-xl'>medium</div>
                </div>
            </div>
            {/* row9 */}
            <div className='border-2 rounded-xl border-black'>
                <div className='grid grid-cols-3 text-center font-semibold border-b-2 border-black '>
                    <div className='border-r-2 border-black py-4 bg-orange-100 rounded-tl-xl pt-12'>apple scott forstall</div>
                    <div className='border-r-2 py-4 bg-green-300 border-black'>
                        <div className='border-r-2 font-semibold text-[#000000] py-4 px-2 flex flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </div>
                    </div>
                    <div className='py-4 bg-yellow-100 border-black rounded-tr-xl pt-12'>medium</div>
                </div>
                <div className='grid grid-cols-4 text-center font-semibold '>
                    <div className='border-r-2 py-4 bg-lime-100 border-black rounded-bl-xl'>medium</div>
                    <div className='border-r-2 py-4 bg-green-100 border-black'>medium</div>
                    <div className='border-r-2 py-4 bg-purple-200 border-black'>medium</div>
                    <div className='py-4 bg-pink-100 rounded-br-xl'>medium</div>
                </div>
            </div>

        </div>
    );
};

export default SmallScreenTable;