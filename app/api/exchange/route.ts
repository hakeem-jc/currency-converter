import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fromCurrency, toCurrency } = await req.json();
    const API_KEY = process.env.EXCHANGE_RATE_API_KEY;

    if (!API_KEY) {
      return NextResponse.json(
        { error: "API key is missing" },
        { status: 500 }
      );
    }
    if (!fromCurrency || !toCurrency) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;
    const response = await fetch(url);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch exchange rate" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
