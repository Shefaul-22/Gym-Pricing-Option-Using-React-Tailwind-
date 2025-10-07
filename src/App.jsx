
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions';
import ResultsChart from './components/ResultsChart/ResultsChart';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';

const pricingPromise = fetch('pricingData.json').then(res => res.json());

const marksPromise = axios.get('marksData.json');

function App() {


  return (
    <>

      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main className='max-w-[1200px] mx-auto mt-15'>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOptions key={pricingPromise.id} pricingPromise={pricingPromise}></PricingOptions>

        </Suspense >

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

          <MarksChart marksPromise={marksPromise}></MarksChart>

        </Suspense>

        {/* Rechart  */}
        <ResultsChart></ResultsChart>

      </main>







    </>
  )
}

export default App
