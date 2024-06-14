import CountrySelect from "@/components/shared/country-select";
import { NetlifyForm } from "@/components/shared/netlify-form";
import {
  EnvelopeIcon,
  PhotoIcon,
  FlagIcon, 
  InformationCircleIcon
} from "@heroicons/react/20/solid";

export default function CauseApply() {
  return (
    <NetlifyForm className="p-12" name="apply-cause" action="/thank-you-thank-you-very-much">
      <div className="space-y-12">
        <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Cause Information</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <div>
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cause Name*
                  <div className="mt-2 flex rounded-md shadow-sm">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <FlagIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        name="cause-name"
                        className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Name of your cause"
                        required
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className="sm:col-span-4 pr-4 ">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country*
                <div className="mt-2">
                  <CountrySelect />
                </div>
              </label>
            </div>

            <div className="sm:col-span-4">
              <label
                className="inline-block text-sm font-medium leading-6 text-gray-900"
              >
                Mission*
                <a href="https://www.youtube.com/watch?v=BPdxppjKCwQ" target="blank" className="mt-3 pl-2 text-sm leading-6 text-blue-600 hover:text-violet-600">(8 words or less)</a>
                  <div className="mt-2 relative flex flex-grow items-stretch focus-within:z-10">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <InformationCircleIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      name="mission"
                      className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="mission"
                    />
                  </div>
              </label>
              
            </div>

            <div className="col-span-full">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                How can digital technology have a huge impact in this problem area?*
                <div className="mt-2">
                  <textarea
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                    defaultValue={""}
                    required
                  />
                </div>
              </label>
              
            </div>

            <div className="col-span-full">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Supporting Documents
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
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your Name*
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </label>
              
            </div>

            <div className="sm:col-span-4">
              <div>
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Your Email*
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
                    className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
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
    </NetlifyForm>
  );
}
