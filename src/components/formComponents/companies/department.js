import React, { useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { Grid } from "@progress/kendo-react-grid";
import departments from "./department.json"
const Department = () => {
  const [add,setAdd] = useState(true);
  const [general,setGeneral]=useState({
    departmentCode:"",
    departmentName:"",
    branchCode:"",
    status:"not active",
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setGeneral((prev)=>{
      return {...prev,[name]:value};
    })
  }
  const onSubmit=()=>{
    console.log(general)
    setAdd(true)
  }
  return (
    <>
    
    <div className="FirstTab">
      <div className="relative mt-6 flex-1 px-4 sm:px-6">
        {/* Replace with your content */}
        {add?
        <div>
        <Grid
          style={{
            height: "480px",
          }}
          data={departments}
        />
        <div class="flex mt-4 space-x-2 justify-end">
  <div>
    <button onClick={()=>setAdd(false)} type="button" class="inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Department</button>
  </div>
</div>
</div>:

<div className="absolute inset-0 px-4 sm:px-6">
<form className="space-y-8 divide-y divide-gray-200">
  <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
    <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
      <div className="space-y-6 sm:space-y-5">
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="department-code"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Department code
          </label>
          <div className="mt-1 sm:col-span-2 sm:mt-0">
            <input
              onChange={handleChange}
              type="text"
              name="departmentCode"
              id="department-code"
              autoComplete="family-name"
              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
            />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="department-name"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Name
          </label>
          <div className="mt-1 sm:col-span-2 sm:mt-0">
            <input
            onChange={handleChange}
              type="text"
              name="departmentName"
              id="department-name"
              autoComplete="family-name"
              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
            />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="branch-code"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Branch Code
          </label>
          <div className="mt-1 sm:col-span-2 sm:mt-0">
            <input
            onChange={handleChange}
              type="text"
              name="branchCode"
              id="branch-code"
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
                    id="comments"
                    name="status"
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
      onClick={()=>setAdd(true)}
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
        Add
      </button>
    </div>
  </div>
</form>
</div>
        
}
        {/* /End replace */}
      </div>
    </div>
    

    </>     
  );
};
export default Department;
