import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
// import ChartOne from '../components/Charts/ChartOne';
// import ChartThree from '../components/Charts/ChartThree';
// import ChartTwo from '../components/Charts/ChartTwo';
import DefaultLayout from '../layout/DefaultLayout';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Support" />
      <div className="text-black dark:text-white flex justify-center">
        Call Us Now for any queries&nbsp; 
        <Link to="tel:+923334142307"  className='hover:hover:text-sky-400'>+923334142307</Link>&nbsp;or Reach Us at&nbsp;<Link to={'mailto:support@solutionpark.au'} className='hover:hover:text-sky-400'>
          
          support@solutionpark.au
        </Link>
      </div>
    </DefaultLayout>
  );
};

export default Support;
