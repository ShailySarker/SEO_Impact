
const BigScreenTable = () => {
    return (
        <div className="mt-14 rounded-xl border-2 hidden md:block">
            <table className="w-full">

                {/* head */}
                <thead className='border-b-2'>
                    <tr className='lg:text-xl text-lg font-bold text-[#000000] text-center '>
                        <th className='border-r-2 lg:text-lg font-bold text-[#000000] py-6 px-3'>Keyword</th>
                        <th className='border-r-2 lg:text-lg font-bold text-[#000000] py-6 px-3'>Search Volume</th>
                        <th className='border-r-2 lg:text-lg font-bold text-[#000000] py-6 px-3'>Comp</th>
                        <th className='border-r-2 lg:text-lg font-bold text-[#000000] py-6 px-3'>Comp</th>
                        <th className='border-r-2 lg:text-lg font-bold text-[#000000] py-6 px-3'>Comp</th>
                        <th className='border-r-2 lg:text-lg font-bold text-[#000000] py-6 px-3'>Comp</th>
                        <th className='lg:text-lg font-bold text-[#000000] py-6 px-3'>Comp</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className='border-b-0 text-center'>
                        <th className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>apple store</th>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2 flex lg:flex-row flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="100"
                                max="100"
                            ></progress> </span>
                            <span>2.7 M</span>
                        </td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                    </tr>
                    {/* row 2 */}
                    <tr className='border-b-0 text-center'>
                        <th className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>apple watch</th>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2 flex lg:flex-row flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="65"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                    </tr>
                    {/* row 3 */}
                    <tr className='border-b-0 text-center'>
                        <th className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>apple tv</th>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2 flex lg:flex-row flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                    </tr>
                    {/* row 4 */}
                    <tr className='border-b-0 text-center'>
                        <th className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>steve jobs</th>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2 flex lg:flex-row flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                    </tr>
                    {/* row 5 */}
                    <tr className='border-b-0 text-center'>
                        <th className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>apple id</th>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2 flex lg:flex-row flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                    </tr>
                    {/* row 6 */}
                    <tr className='border-b-0 text-center'>
                        <th className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>apple discount</th>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2 flex lg:flex-row flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                    </tr>
                    {/* row 7 */}
                    <tr className='border-b-0 text-center'>
                        <th className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>apple Usa</th>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2 flex lg:flex-row flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                    </tr>
                    {/* row 8 */}
                    <tr className='border-b-0 text-center'>
                        <th className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>apple India</th>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2 flex lg:flex-row flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                    </tr>
                    {/* row 9 */}
                    <tr className='border-b-0 text-center'>
                        <th className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>apple scott forstall</th>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2 flex lg:flex-row flex-col-reverse items-center justify-center gap-5'>
                            <span><progress
                                className="flex items-center progress custom5-progress h-4 w-24"
                                value="85"
                                max="100"
                            ></progress> </span>
                            <span>1.7 M</span>
                        </td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='border-r-2 lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                        <td className='lg:text-lg font-semibold text-[#000000] lg:py-5 py-4 px-2'>medium</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BigScreenTable;