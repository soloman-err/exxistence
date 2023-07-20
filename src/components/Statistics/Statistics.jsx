import { useLoaderData } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const assignmentMarks = useLoaderData();

    return (
        <div className='text-center'>
            <h1 className='md:text-xl lg:text-2xl font-extrabold underline uppercase bg-slate-50 py-10'>Statistics of Assignment Marks of Solo</h1>

            <ResponsiveContainer className='text-xs md:text-sm' width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="50%" data={assignmentMarks}>
                    <PolarGrid />
                    <Tooltip />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis />
                    <Radar name="score" dataKey="marks" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div >
    );
};

export default Statistics;
