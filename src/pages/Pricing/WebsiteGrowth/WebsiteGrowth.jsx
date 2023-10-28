// import {
//     ResponsiveContainer,
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend
// } from "recharts";

import WebsiteGrowthBarChart from "../../../components/WebsiteGrowthBarChart/WebsiteGrowthBarChart";

// const data = [
//     {
//         name: "January",
//         basic: 2077,
//         premium: 2630,
//         enterprise: 2400
//     },
//     {
//         name: "February",
//         basic: 1736,
//         premium: 2398,
//         enterprise: 2610
//     },
//     {
//         name: "March",
//         basic: 2321,
//         premium: 3108,
//         enterprise: 2995
//     },
//     {
//         name: "April",
//         basic: 2780,
//         premium: 3908,
//         enterprise: 3638
//     },
//     {
//         name: "May",
//         basic: 3897,
//         premium: 4886,
//         enterprise: 4181
//     },
//     {
//         name: "June",
//         basic: 3774,
//         premium: 4808,
//         enterprise: 4544
//     },
//     {
//         name: "July",
//         basic: 3493,
//         premium: 4367,
//         enterprise: 4622
//     },
//     {
//         name: "August",
//         basic: 3724,
//         premium: 4806,
//         enterprise: 4709
//     },
//     {
//         name: "September",
//         basic: 3908,
//         premium: 4807,
//         enterprise: 5103
//     },
//     {
//         name: "October",
//         basic: 4092,
//         premium: 4930,
//         enterprise: 5208
//     }
// ];


const WebsiteGrowth = () => {
    return (
        <div className="lg:mt-32 md:mt-16 mt-12 lg:mb-36 mb-28 lg:mx-16 md:mx-16 mx-6">
            <div>
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Website Growth</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold text-center lg:mx-56">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare. Justo curabitur iaculis id senectus sodales mattis sed mattis nisl. Phasellus ipsum ultricies.</p>
            </div>
            {/* <div className="mt-20 flex justify-center visible md:hidden">
                
                <BarChart
                    width={370}
                    height={200}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="basic" fill="#8884d8" />
                    <Bar dataKey="premium" fill="#82ca9d" />
                    <Bar dataKey="enterprise" fill="#Ca9d" />
                </BarChart>
                
            </div>
            <div className="mt-20 hidden md:visible lg:hidden">
                
                <BarChart
                    width={680}
                    height={500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="basic" fill="#8884d8" />
                    <Bar dataKey="premium" fill="#82ca9d" />
                    <Bar dataKey="enterprise" fill="#Ca9d" />
                </BarChart>
                
            </div> */}
            {/* <div className="mt-32 flex justify-center">
                
                <BarChart
                    width={1100}
                    height={800}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="basic" fill="#8884d8" />
                    <Bar dataKey="premium" fill="#82ca9d" />
                    <Bar dataKey="enterprise" fill="#Ca9d" />
                </BarChart>
                
            </div> */}
            <div className="mt-24"> 
                <WebsiteGrowthBarChart></WebsiteGrowthBarChart>
            </div>
        </div >
    );
};

export default WebsiteGrowth;