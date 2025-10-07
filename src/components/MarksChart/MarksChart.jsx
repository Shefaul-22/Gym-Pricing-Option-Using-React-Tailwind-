import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    // console.log(marksDataRes);
    const marksData = marksDataRes.data;

    // data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const student ={
            id: studentData.id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }
        const avg = (student.physics + student.chemistry + student.math ) / 3;
        student.avg = avg;
        return student;
    })
    // console.log(marksChartData)
    
    return (
        <div>
            <h2 className='text-4xl font-bold my-5'>Student statistics(Barchart): </h2>
            <BarChart width={1200} height={500} data={marksChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'avg'} fill='blue'></Bar>
                <Bar dataKey={'chemistry'} fill='yellow'></Bar>
                <Bar dataKey={'math'} fill='blue'></Bar>

            </BarChart>
        </div>
    );
};

export default MarksChart;