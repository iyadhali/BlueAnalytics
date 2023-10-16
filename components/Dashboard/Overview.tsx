'use client';
import React from 'react';
import TotalGraph from '../Charts/TotalGraph';
import Category from '../Charts/Category';
import Card from '../Card';
import TextCard from '../TextCard';

const Overview: React.FC = () => {
  const title = 'Total plastic collected';
  const unit = 'Kg';

  const card_data = {
    cardTitle: 'Cleaned up so far',
    cardContent: '254.64 Tonnes',
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <Card
          title={title}
          total={`1234.74 ${unit}`}
          vs="change from previous month"
          rate="10.43%"
          levelUp
        >
          <img
            className="h-auto max-w rounded-lg object-fit h-9 max-w-fit"
            src="/images/org_logos/parley.png"
            alt="Parley Logo"
            width="200px"
            height="62"
          />
        </Card>
        <Card
          title={title}
          total={`548.30 ${unit}`}
          vs="change from previous month"
          rate="4.35%"
          levelUp
        >
          <img
            className="h-auto max-w rounded-lg object-fit h-8 max-w-fit"
            src="/images/org_logos/cora-cora-maldives.png"
            alt="Cora Cora Maldives Logo"
            width="200px"
            height="62"
          ></img>
        </Card>
        <Card
          title={title}
          total={`424.20 ${unit}`}
          vs="change from previous month"
          rate="2.59%"
          levelUp
        >
          <img
            className="h-auto max-w rounded-lg object-fill h-10 max-w-fit"
            src="/images/org_logos/euro_marketing.jpg"
            alt="Coca Cola Logo"
            width="200px"
            height="62"
          ></img>
        </Card>
        <Card
          title={title}
          total="322.45"
          vs="change from previous month"
          rate="2.95%"
          levelDown
        >
          <img
            className="h-auto rounded-lg object-fill h-14 max-w-fit"
            src="/images/org_logos/save_the_beach.jpeg"
            alt="Save the Beach Logo"
            width="200px"
            height="62"
          ></img>
        </Card>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <TotalGraph />
        <TextCard
          key={1}
          cardTitle={card_data.cardTitle}
          cardContent={card_data.cardContent}
        />
        <Category />
      </div>
    </>
  );
};

export default Overview;
