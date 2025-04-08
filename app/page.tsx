"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("JMD");
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#181818]">
      <form className="max-w-sm md:w-96 min-h-48 p-6 rounded-lg shadow-sm bg-[#212121] flex flex-col justify-between">
        <h3 className="text-white text-lg pb-5">Currency Converter</h3>
        <div className="mb-6">
          <label htmlFor="amount" className="block text-white font-medium mb-2">
            Enter Amount
          </label>
          <input
            type="number"
            name="amount"
            className="w-full p-3 text-white font-medium bg-[#212121] border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
          />
        </div>
        
      </form>
    </main>
  );
}
