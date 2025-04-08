import React from "react";

const currencyCodes: string[] = [
  "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
  "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
  "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
  "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
  "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
  "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
  "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
  "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
  "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
  "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
  "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
  "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
  "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD",
  "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY",
  "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES",
  "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW",
  "ZWL"
];

interface CurrencySelectProps {
  selectedCurrency: string;
  handleCurrency: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ selectedCurrency, handleCurrency }) => {
  const countryCode = selectedCurrency.substring(0, 2);
  
  return (
    <div className="flex items-center space-x-2 p-2 bg-[#181818] rounded-md">
      <img
        src={`https://flagsapi.com/${countryCode}/flat/64.png`}
        alt="Flag"
        className="w-8 h-8 rounded"
      />
      <select
        onChange={handleCurrency}
        value={selectedCurrency}
        className="bg-transparent text-white text-sm p-2 rounded focus:outline-none cursor-pointer"
      >
        {currencyCodes.map(currency => (
          <option key={currency} value={currency} className="text-black">
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;