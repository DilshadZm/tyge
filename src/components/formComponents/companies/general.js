import React, { useState } from "react";
const General = () => {

  const [general,setGeneral]=useState({
    companyCode:"",
    firstName:"",
    address:"",
    email:"",
    country:"",
    streetAddress:"",
    city:"",
    poBox:"",
    fax:"",
    telephone:"",
    trn:"",
    region:"",
    active:"",
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setGeneral((prev)=>{
      return {...prev,[name]:value};
    })
  }
  const onSubmit=()=>{
    console.log(general)
  }
  return (
    <div className="FirstTab">
      <div className="relative mt-6 flex-1 px-4 sm:px-6">
        <div className="absolute inset-0 px-4 sm:px-6">
          <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                <div className="space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Company Code
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                      onChange={handleChange}
                        type="text"
                        name="companyCode"
                        id="company-code"
                        autoComplete="given-name"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Name
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                      onChange={handleChange}
                        type="text"
                        name="firstName"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Address
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <textarea
                      onChange={handleChange}
                        id="address"
                        name="address"
                        rows={3}
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={""}
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        Write a few sentences about yourself.
                      </p>
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Email address
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                      onChange={handleChange}

                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Country
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <select
                      onChange={handleChange}

                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Street address
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                      onChange={handleChange}

                        type="text"
                        name="streetAddress"
                        id="street-address"
                        autoComplete="street-address"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      City
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                      onChange={handleChange}

                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="po-box"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      P O Box
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                      onChange={handleChange}

                        type="text"
                        name="poBox"
                        id="po-box"
                        autoComplete="address-level1"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="fax"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Fax
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                      onChange={handleChange}

                        type="text"
                        name="fax"
                        id="fax"
                        autoComplete="fax"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Telephone
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                      onChange={handleChange}

                        type="text"
                        name="telephone"
                        id="telephone"
                        autoComplete="family-name"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="trn"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      TRN
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                      onChange={handleChange}

                        type="text"
                        name="trn"
                        id="trn"
                        autoComplete="family-name"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Region
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <input
                      onChange={handleChange}

                        type="text"
                        name="region"
                        id="region"
                        autoComplete="family-name"
                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="active"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Active
                    </label>
                    <div className="mt-4 sm:col-span-2 sm:mt-0">
                      <div className="max-w-lg space-y-4">
                        <div className="relative flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                      onChange={handleChange}

                              id="active"
                              name="active"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex pb-4 justify-end">
                <button
                  type="button"
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                onClick={onSubmit}
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* /End replace */}
      </div>
    </div>
  );
};
export default General;
