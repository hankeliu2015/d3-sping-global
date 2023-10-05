'use client';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import countries from 'i18n-iso-countries'; // provide reliable alpha 2 country codes
import { useEffect, useState } from "react";

export default function CountrySelect() {
  const [isClient, setIsClient] = useState(false)
  // handle hydration mismatch error with effect hook
  useEffect(() => { setIsClient(true)}, [])

  const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
  const countryWithFlag = Object.keys(countries.getAlpha2Codes()).map(str => getUnicodeFlagIcon(str) + ' ' + regionNamesInEnglish.of(str));

  const countrySelectOptions = () => {
    return countryWithFlag.map((str, index) => <option key={str + index}>{str}</option>);
  }

  return (
    <select
      id="country-input"
      name="country"
      autoComplete="country-name"
      className="block w-full rounded-md border-0 pl-3 py-1.5 bg-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
      required
    >
      <option>{getUnicodeFlagIcon("US")} United States </option>
      {!isClient ? '' : countrySelectOptions()}
    </select>
  );
}
  