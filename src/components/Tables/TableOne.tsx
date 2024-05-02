import { RecentUploads } from '../../types/recentUploads';


const recentUploads: RecentUploads[] = [
  {
    id: 1,
    lot_number: 4324,
    qty: 10000,
    unit: 'meter',
    per_m_weight: '524 KG',
    quality: 'A',
    width: '885',
    current_upload_status: 'UPLOADED',
    chemicals: ['Foramldehyde', 'Phthalates', 'Azo dyes']
},
{
    id: 2,
    lot_number: 4325,
    qty: 40000,
    unit: 'meter',
    per_m_weight: '',
    quality: 'AA',
    width: '885',
    current_upload_status: 'UPLOADED',
    chemicals: ['Foramldehyde', 'Phthalates', 'Azo dyes']
},
{
    id: 3,
    lot_number: 4324,
    qty: 10000,
    unit: 'meter',
    per_m_weight: '124 KG',
    quality: 'B+',
    width: '885',
    current_upload_status: 'DRAFT',
    chemicals: ['Foramldehyde', 'Phthalates', 'Azo dyes']
},

{
    id: 4,
    lot_number: 4324,
    qty: 110000,
    unit: 'meter',
    per_m_weight: '120 KG',
    quality: 'AAA',
    width: '885',
    current_upload_status: 'UPLOADED',
    chemicals: ['Foramldehyde', 'Phthalates', 'Azo dyes']
},

{
    id: 5,
    lot_number: 4324,
    qty: 210000,
    unit: 'meter',
    per_m_weight: 'A',
    quality: 'BB',
    width: '885',
    current_upload_status: 'DRAFT',
    chemicals: ['Foramldehyde', 'Phthalates', 'Azo dyes']
}
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Recent Uploads
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              ID
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Lot Number
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Qty
            </h5>
          </div>
         
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Width
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Chemicals
            </h5>
          </div>
        </div>
         
        </div>

        {recentUploads.map((uploads, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === uploads.id - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              
              <p className="text-black dark:text-white sm:block">
                {uploads.id}
              </p>
            </div>

             <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{uploads.lot_number}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{uploads.qty}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{uploads.width}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{uploads.chemicals.join(', ')}</p>
            </div> 
          </div>
        ))}
      </div>
  );
};

export default TableOne;
