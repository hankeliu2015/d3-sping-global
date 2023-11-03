import React from "react";
import Link from "next/link";
import Hero from "@/components/shared/hero";
// import { Card, CardContent } from '@material-ui/core'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function ThankYouPage(): JSX.Element {
  return (
    <Hero additionalClassNames="thank-you">
    <div className="rounded-md bg-white p-4">
      
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-humanblue">
            Cause apply completed
          </h3>
          <div className="mt-2 text-sm text-humanblue">
            <p>
            More Human Internet is excited to be partnering with you to advance your online strategy, bringing more volunteers to help your mission of stewarding the irreplaceable cultural and natural resources.
            </p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex items-center gap-x-6">
              <Link
                href={{ pathname: "/" }}
                className="rounded-md bg-humanblue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-humanlightblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Dismiss
              </Link>
              <Link href={{ pathname: "/causes" }} className="text-sm font-semibold leading-6 text-humanpink">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Hero>
  );
}
