import React, { useState, useEffect } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
interface Address {
  street: string;
  city: string;
  suite: string;
  // other address properties...
}
interface TableDataItem {
  id: number;
  name: string;
  email: string;
  address: Address;
}

function ViewChemicals() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tableData, setTableData] = useState<TableDataItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(7);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredData = tableData.filter((row) =>
    Object.values<TableDataItem>(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);
  var sr = 1;
  return (
    <div>
      <DefaultLayout>
        <Breadcrumb pageName="Chemicals" />
        <div className="text-end mb-2">
         
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border-neutral-100 border border-gray-300 rounded-3xl pl-4"
            onChange={handleSearch}
          />
          
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 text-center">Sr#</th>

                <th className="px-6 py-3 text-center">ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">email</th>
                <th className="px-6 py-3">address</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length === 0 ? (
                <tr className="text-center">
                  <td colSpan={3}>
                    <strong className="text-xl">No Record found</strong>
                  </td>
                </tr>
              ) : (
                currentItems.map((row) => (
                  <tr
                    key={row.id}
                    className="odd:bg-white even:bg-gray-50  border-b  dark:border-strokedark dark:bg-boxdark"
                  >
                    <td className="px-6 py-4 text-center">{sr++}</td>
                    <td className="px-6 py-4 text-center">{row.id}</td>
                    <td className="px-6 py-4">{row.name}</td>
                    <td className="px-6 py-4">{row.email}</td>
                    <td className="px-6 py-4">
                      {row.address.street + ', ' + row.address.suite}
                    </td>
                    {/* <td className="px-6 py-4">{row.age}</td> */}
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredData.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </DefaultLayout>
    </div>
  );
}

const Pagination: React.FC<{
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}> = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex inline justify-end mr-5">
      {pageNumbers.map((number) => (
        <li
          key={number}
          onClick={() => paginate(number)}
          className={`inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer m-1 ${
            number === currentPage ? 'active' : ''
          }`}
        >
          {number}
        </li>
      ))}
    </ul>
  );
};

export default ViewChemicals;
