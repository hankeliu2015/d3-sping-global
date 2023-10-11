import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import countries from 'i18n-iso-countries';

export default function CountrySelect() {
  const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
  const countryWithFlag = Object.keys(countries.getAlpha2Codes()).map(str => getUnicodeFlagIcon(str) + ' ' + regionNamesInEnglish.of(str));

  return (
    <select
      id="country-input"
      name="country"
      autoComplete="country-name"
      className="block w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      required
    >
      <option>{getUnicodeFlagIcon("US")} United States</option>
      {countryWithFlag.map((str, index) => <option key={str + index}>{str}</option>)}
    </select>
  );
}
