import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import SelectGroupTwo from '../../components/Forms/SelectGroup/SelectGroupTwo';
import MultiSelect from '../../components/Forms/MultiSelect';
import { Link } from 'react-router-dom';

const Chemicals = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Create Chemicals" />

      <div className="flex flex-col gap-12">
        {/* <!-- Textarea Fields --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <form action="#">
            <div className="p-6.5">
              <div className="mb-6">
                <div className="w-full">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Name<span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Chemical Name"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <label className="mb-2.5 block text-black dark:text-white">
                  Detail
                </label>
                <textarea
                  rows={6}
                  placeholder="Enter Chemical Detail"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Chemicals;
