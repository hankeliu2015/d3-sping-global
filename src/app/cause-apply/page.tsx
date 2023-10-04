'use client';
import {
    EnvelopeIcon,
    PhotoIcon,
    UserCircleIcon,
    BarsArrowUpIcon,
    UsersIcon,
    HandRaisedIcon, 
    FlagIcon, 
    InformationCircleIcon
  } from "@heroicons/react/20/solid";

  import getUnicodeFlagIcon from 'country-flag-icons/unicode';
  import countries from 'i18n-iso-countries'; // provide reliable alpha 2 country codes
  import { useEffect, useState } from "react";
  
  export default function CauseApply() {
    // TODO: store country Selected State
    // const [country, setCountry] = useState("United States")

    const [isClient, setIsClient] = useState(false)
    // handle hydration mismatch error with effect hook
    useEffect(() => { setIsClient(true)}, [])

    const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
    const countryWithFlag = Object.keys(countries.getAlpha2Codes()).map(str => getUnicodeFlagIcon(str) + ' ' + regionNamesInEnglish.of(str));

    const countrySelectOptions = () => {
      return countryWithFlag.map((str, index) => <option key={str + index}>{str}</option>);
    } 

    return (
      <form className="p-12">
        <div className="space-y-12">
          <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">Cause Information</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cause Name
                  </label>
                  <div className="mt-2 flex rounded-md shadow-sm">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <FlagIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Name of your cause"
                      />
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="sm:col-span-4 pr-4 ">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 pl-3 py-1.5 bg-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>{getUnicodeFlagIcon("US")} United States </option>
                    {!isClient ? '' : countrySelectOptions()}
                  </select>
                </div>
              </div>
  
              <div className="sm:col-span-4">
                <label
                  htmlFor="mission"
                  className="inline-block text-sm font-medium leading-6 text-gray-900"
                >
                  Mission
                </label>
                <a href="https://www.youtube.com/watch?v=BPdxppjKCwQ" target="blank"className="mt-3 pl-2 text-sm leading-6 text-gray-600 hover:text-violet-600">(8 words or less)</a>
                <div className="mt-2 relative flex flex-grow items-stretch focus-within:z-10">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <InformationCircleIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type='text'
                    id="about"
                    name="misson"
                    className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="mission"
                  />
                </div>
              </div>
  
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  How can digital technology have a huge impact in this problem area?
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
  
              <div className="col-span-full">
                <label
                  htmlFor="file-upload"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Supporting Documents(Optional)
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">Contact Information</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Your Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-4">
                {/* input field with leading icon  */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your Email
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <EnvelopeIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>
  
              <div className="sm:col-span-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>{getUnicodeFlagIcon("US")} United States </option>
                    {!isClient ? '' : countrySelectOptions()}
                  </select>
                </div>
              </div>
  
              {/* <div className="col-span-2">
                <label
                  htmlFor="street-address"
                  className="inline-block text-sm font-medium leading-6 text-gray-900 whitespace-nowrap"
                >
                  Street address (Optional)
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
  
              <div className="sm:col-span-1 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-1">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900 whitespace-nowrap"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-1">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900 whitespace-nowrap"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 whitespace-nowrap"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    );
  }
  