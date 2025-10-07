import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": 1,
    "name": "Ayesha Khan",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": 2,
    "name": "Rahim Uddin",
    "physics": 74,
    "chemistry": 81,
    "math": 69
  },
  {
    "id": 3,
    "name": "Sneha Das",
    "physics": 91,
    "chemistry": 89,
    "math": 95
  },
  {
    "id": 4,
    "name": "Imran Hossain",
    "physics": 66,
    "chemistry": 72,
    "math": 70
  },
  {
    "id": 5,
    "name": "Mehnaz Rahman",
    "physics": 80,
    "chemistry": 77,
    "math": 84
  },
  {
    "id": 6,
    "name": "Tariq Islam",
    "physics": 92,
    "chemistry": 88,
    "math": 90
  },
  {
    "id": 7,
    "name": "Jannat Akter",
    "physics": 78,
    "chemistry": 83,
    "math": 76
  },
  {
    "id": 8,
    "name": "Nafis Chowdhury",
    "physics": 88,
    "chemistry": 79,
    "math": 85
  },
  {
    "id": 9,
    "name": "Rafi Ahmed",
    "physics": 69,
    "chemistry": 65,
    "math": 72
  },
  {
    "id": 10,
    "name": "Farzana Kabir",
    "physics": 95,
    "chemistry": 91,
    "math": 97
  }
]


const ResultsChart = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold my-8'>Student mark statistics (Line chart):</h2>

            <LineChart width={1200} height={200} data={resultData}> 
                <XAxis dataKey={'name'}></XAxis>
                <YAxis ></YAxis>
                <Line dataKey="math" stroke='blue'></Line>
                <Line dataKey= {'chemistry'} stroke='red'></Line>

            </LineChart>
            
        </div>
    );
};

export default ResultsChart;