import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartThree from '../../components/Charts/ChartThree';
// import ChartOne from '../../components/Charts/ChartOne';
// import ChartTwo from '../../components/Charts/ChartTwo';
// import ChatCard from '../../components/Chat/ChatCard';
// import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlaskVial, faUtensils } from '@fortawesome/free-solid-svg-icons';

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardDataStats
          title="Total Chemicals"
          total="3,000"
          bgColor="bg-sky-500"
        >
          {/* rate="0.43%" levelUp */}
          <FontAwesomeIcon icon={faFlaskVial} />
        </CardDataStats>
        {/* <CardDataStats title="Total Profit" total="$45,2K" rate="4.35%" levelUp> */}
        <CardDataStats
          title="Total Recipes"
          total="45,2K"
          bgColor="bg-green-500"
        >
          <FontAwesomeIcon icon={faUtensils} />
        </CardDataStats>
        <CardDataStats title="Recipes" shortTitle='+ Today' total="2" bgColor="bg-sky-500">
          <FontAwesomeIcon icon={faUtensils} />
        </CardDataStats>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <div className="col-span-12 xl:col-span-8">
        <TableOne />
      </div>
      {/* <ChatCard /> */}
      <ChartThree />

      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
