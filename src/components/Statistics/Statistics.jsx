import { useLoaderData } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const assignmentMarks = useLoaderData();

    return (
        <div className='text-center py-10'>
            <h1 className='text-xl lg:text-2xl font-extrabold underline'>Statistics of Assignment Marks of Solo</h1>
            <RadarChart className='mx-auto mt-[20%] md:mt-[5%]' cx="50%" cy="50%" outerRadius="60%" width={700} height={500} data={assignmentMarks}>
                <PolarGrid />
                <Tooltip></Tooltip>
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar name="score" dataKey="marks" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </div >
    );
};

export default Statistics;