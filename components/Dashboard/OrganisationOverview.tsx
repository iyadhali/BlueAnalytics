
"use client";
import React from "react";
import ParleyDataStats from "../DataStats/ParleyDataStats";
import ChartSeven from "../Charts/ChartSeven";
import ChartEight from "../Charts/ChartEight";
import ChartNine from "../Charts/ChartNine";
import ToDoList from "../Todo/ToDoList";


const OrganisationOverview: React.FC = () => {
  return (
    <>
      <ParleyDataStats />

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-7">
          <ChartSeven />
        </div>


      </div>
    </>
  );
};

export default OrganisationOverview;
