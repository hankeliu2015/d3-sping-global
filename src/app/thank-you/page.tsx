import React from "react";
// import { Card, CardContent } from '@material-ui/core'
import Hero from "@/components/shared/hero";
import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function ThankYouPage(): JSX.Element {
  return (
    <Hero additionalClassNames="thank-you">
    <div className="rounded-md bg-green-50 p-4">
      
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">
            Casue apply completed
          </h3>
          <div className="mt-2 text-sm text-green-700">
            <p>
            More Human Internet is excited to be partnering with Obodo to advance their online strategy, bringing more volunteers to help their mission of stewarding the irreplaceable cultural and natural resources of East Honolulu.
            </p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <button
                type="button"
                className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                Learn more
              </button>
              <button
                type="button"
                className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Hero>
  );
}
