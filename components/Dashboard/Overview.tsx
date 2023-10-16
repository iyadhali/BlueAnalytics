'use client';
import React from 'react';
import TotalGraph from '../Charts/TotalGraph';
import Card from '../Card';

const Overview: React.FC = () => {
  const title = 'Total waste collected';
  const unit = 'Kg';

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5" >
        <Card title="Total plastic collected" total={`234.3 ${unit}`} vs="vs previous month" rate="10.43%" levelUp>

          <img
            src="/images/org_logos/parley.png"
            alt="Parley Logo"
            width="200px"
            height="62"
          />

        </Card>
        <Card title="Total Profit" total="$45,2K" vs="vs previous month" rate="4.35%" levelUp>
          <img
            src="/images/org_logos/cora-cora-maldives.png"
            alt="Coca Cola Logo"
            width="200px"
            height="62"
          ></img>
        </Card>
        <Card title="Total Product" total="2.450" vs="previous month" rate="2.59%" levelUp>
          <img
            src="/images/org_logos/euro_marketing.jpg"
            alt="Coca Cola Logo"
            width="200px"
            height="62"
          ></img>
        </Card>
        <Card title="Total Users" total="3.456" vs="previous month" rate="0.95%" levelDown>
          <img
            src="/images/org_logos/coca-cola-logo.svg"
            alt="Coca Cola Logo"
            width="200px"
            height="62"
          ></img>
        </Card>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <TotalGraph/>
      </div>
    </>
  );
};

export default Overview;
