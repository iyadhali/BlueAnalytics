'use client';
import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { prisma } from '@/lib/prisma';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});



const options: ApexOptions = {
  chart: {
    height: 400,
    width: 900,
    type: "area",
    /*stroke: {
      curve: 'smooth'
    }*/
  },
  grid: {
    show: false // disable grid lines
  },
  dataLabels: {           
    enabled: false        
  },
  markers: {
    /*show: false*/
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  },
  yaxis: {
    show: false // hide y-axis label
  },
  title: {
    text: "Monthly Trend of Total Waste Collected (kg)",
    align: 'center'
  },
};

interface ChartOneState {
  series: {
    name: string;
    color: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [{
      name: 'Marine Wash-up',
      color: '#20b2aa',
      data: [250, 480, 200, 760, 450, 960, 590, 890, 900, 1200, 880, 790]
    }, {
      name: 'Residential',
      color: '#66cdaa',
      data: [200, 350, 350, 650, 230, 670, 250, 562, 340, 450, 670, 250]
    }, {
      name: 'Industrial',
      color: '#37bad6',
      data: [100, 230, 100, 500, 150, 382, 147, 448, 340, 400, 550, 860]
    }]
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };

  handleReset;

  // NextJS Requirement
  const isWindowAvailable = () => typeof window !== "undefined";

  if (!isWindowAvailable()) return <></>;

  return (
      <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
        <div id="chartOne" className="-ml-5 h-[355px] w-[105%]">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            width="100%"
            height="100%"
          />
        </div>
      </div>
  );
};


export default ChartOne;
