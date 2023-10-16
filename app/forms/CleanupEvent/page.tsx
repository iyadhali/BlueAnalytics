import Breadcrumb from "@/components/breadcrumbs/page";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Arrange an event form",
  description: "Arrange an event form,",
  // other metadata
};

const FormLayout = () => {
  return (
    <>
      <Breadcrumb pageName="Arrange an Event" />
      <form action="#">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="p-5">

              <div className="flex flex-col gap-9">
                {/* <!-- Event Location --> */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-extrabold text-black dark:text-white">
                      Location
                    </h3>
                  </div>

                  <div className="p-6.5">

                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Atoll
                        </label>
                        <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                          <option value="">K</option>
                        </select>
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Island
                        </label>
                        <div className="bg-white dark:bg-form-input">
                          <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                            <option value="">Male</option>
                            <option value="">Hulhumale</option>
                            <option value="">Villimale</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4.5">
                      <div>
                        <label className="mb-3 block text-black dark:text-white">
                          Location Type
                        </label>
                        <div className="bg-white dark:bg-form-input">
                          <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                            <option value="">Lagoon</option>
                            <option value="">Beach</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Location Area Length (m)
                      </label>
                      <input
                        type="text"
                        id="Location Area"
                        placeholder="Location Area Length (m)"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Location Area Width (m)
                      </label>
                      <input
                        type="text"
                        id="Location Area"
                        placeholder="Location Area Width (m)"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4.5">
                      <div>
                        <label className="mb-3 block text-black dark:text-white">
                          Day of the Upcoming Event
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Description of the Event
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Type your message"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button className="flex w-full justify-center rounded bg-[#525af2] p-3 font-medium text-gray">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>





    </>
  );
};

export default FormLayout;
