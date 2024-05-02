import React, { ReactNode } from 'react';
interface CardDataStatsProps {
  title: string;
  shortTitle?: string;
  total: string;
  bgColor: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  shortTitle,
  total,
  bgColor,
  children,
}) => {
  return (
    <div className="flex gap-4 bg-white dark:bg-meta-4 rounded flex-1  flex items-center">
      {/* <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4"> */}
      <div
        className={`${bgColor} text-white rounded-sm h-20 w-20 flex items-center justify-center `}>
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium">
            {title}
          </span>
          <span className="text-sm text-green-500 pl-2">{shortTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
