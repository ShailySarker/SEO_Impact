import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "January",
        basic: 2077,
        premium: 2630,
        enterprise: 2400
    },
    {
        name: "February",
        basic: 1736,
        premium: 2398,
        enterprise: 2610
    },
    {
        name: "March",
        basic: 2321,
        premium: 3108,
        enterprise: 2995
    },
    {
        name: "April",
        basic: 2780,
        premium: 3908,
        enterprise: 3638
    },
    {
        name: "May",
        basic: 3897,
        premium: 4886,
        enterprise: 4181
    },
    {
        name: "June",
        basic: 3774,
        premium: 4808,
        enterprise: 4544
    },
    {
        name: "July",
        basic: 3493,
        premium: 4367,
        enterprise: 4622
    },
    {
        name: "August",
        basic: 3724,
        premium: 4806,
        enterprise: 4709
    },
    {
        name: "September",
        basic: 3908,
        premium: 4807,
        enterprise: 5103
    },
    {
        name: "October",
        basic: 4092,
        premium: 4930,
        enterprise: 5208
    }
];


const WebsiteGrowthBarChart = () => {
    return (
            <div style={{ width: '100%', height: 650 }}> 
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="basic" fill="#8884d8" activeDot={<Rectangle width={4} stroke="blue" height={4} />} />
                    <Bar dataKey="premium" fill="#82ca9d" activeDot={<Rectangle width={4} stroke="green" height={4} />} />
                    <Bar dataKey="enterprise" fill="#Ca9d" activeDot={<Rectangle width={4} stroke="purple" height={4} />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WebsiteGrowthBarChart;