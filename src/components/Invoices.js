import React from 'react'
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn} from "@progress/kendo-react-grid";
import products from "./generated.json";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {RiAddCircleLine} from 'react-icons/ri'
import "../resource/style.css"
function Invoices() {
  return (
<div>
  <div className='mx-auto flex lg:my-8 max-w-7xl sm:px-6 lg:px-2 flex-wrap'>
    <h2 className='my-1 font-bold lg:text-2xl font-san sm:text-lg'>Supplier Invoices</h2>
    <div className=" items-center w-full max-w-lg mx-5 lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>

                    <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-transparent bg-gray-100 py-1 mt-2 pl-10 pr-3 leading-5 text-gray-700 placeholder-gray-600 focus:border-gray focus:bg-gray-200 focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="Search Invoice / Supplier"
                      type="search"
                    />
                  </div>

                  </div>
                  <div className='flex basis-3/6 my-1 justify-end'>
                  <div classname='justify-items-end'>
                        <button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          
                          <a href="#" className=" flex rounded-xl bg-violet-600 px-3 py-2 text-sm font-medium text-white">
                          <RiAddCircleLine className='bg-transparent text-white mr-2 w-5 h-5'/>
                      Add New Invoice
                    </a>
                        </button>
                      </div>
                  </div>
  </div>
    <div className='mx-auto max-w-7xl sm:px-6 lg:my-3 py-6 rounded-xl lg:px-8 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
      
      <Grid
    style={{
        height: "450px",
    }}
    data={products}
    />
    {/* <GridColumn field="ProductID" title="ID" width="40px" />
    <GridColumn field="ProductName" title="Name" width="250px" />
    <GridColumn field="Category.CategoryName" title="CategoryName" />
    <GridColumn field="UnitPrice" title="Price" />
    <GridColumn field="UnitsInStock" title="In stock" /> */}
    </div>
    </div>
  )
}

export default Invoices