import { NextResponse } from 'next/server';

export const revalidate = 60; // Cache for 60 seconds to avoid hitting rate limits

interface MarketData {
    symbol: string;
    name: string;
    price: number | string;
    change: number;
    changePercent: number;
    currency: string;
}

export async function GET() {
    try {
        // 1. Fetch Crypto Data from CoinGecko (Free API)
        // IDs: bitcoin, ethereum
        const cryptoRes = await fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true',
            { headers: { 'Accept': 'application/json' } }
        );

        let cryptoData = {};
        if (cryptoRes.ok) {
            cryptoData = await cryptoRes.json();
        } else {
            console.error('CoinGecko API Error:', cryptoRes.statusText);
        }

        // 2. Fetch Stock/Index Data from Yahoo Finance (Unofficial Chart API)
        // Symbols: AEG.L (Active Energy Group), ^FTSE (FTSE 100), ^GSPC (S&P 500)
        // Note: Yahoo Finance can be flaky without proper headers, usually works for server-side fetches.
        const symbols = ['AEG.L', '^FTSE', '^GSPC'];
        const stockPromises = symbols.map(async (symbol) => {
            try {
                const res = await fetch(
                    `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`,
                    {
                        headers: {
                            'User-Agent': 'Mozilla/5.0' // Mimic browser to avoid some initial blocking
                        }
                    }
                );
                if (!res.ok) return null;
                const data = await res.json();
                const meta = data.chart.result[0].meta;
                return {
                    symbol: symbol,
                    price: meta.regularMarketPrice,
                    previousClose: meta.chartPreviousClose,
                    currency: meta.currency
                };
            } catch (e) {
                console.error(`Error fetching ${symbol}:`, e);
                return null;
            }
        });

        const stockResults = await Promise.all(stockPromises);

        // 3. Format Response
        const output: MarketData[] = [];

        // Process Stocks
        stockResults.forEach(item => {
            if (item) {
                let name = item.symbol;
                if (item.symbol === 'AEG.L') name = 'AEG (LSE)';
                if (item.symbol === '^FTSE') name = 'FTSE 100';
                if (item.symbol === '^GSPC') name = 'S&P 500';

                const change = item.price - item.previousClose;
                const changePercent = (change / item.previousClose) * 100;

                output.push({
                    symbol: item.symbol,
                    name,
                    price: item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                    change,
                    changePercent,
                    currency: item.currency
                });
            }
        });

        // Process Crypto
        // @ts-ignore
        if (cryptoData.bitcoin) {
            // @ts-ignore
            const btc = cryptoData.bitcoin;
            output.push({
                symbol: 'BTC',
                name: 'Bitcoin',
                price: btc.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
                change: 0, // CoinGecko simple/price might not give absolute change purely, but we have change percent
                changePercent: btc.usd_24h_change,
                currency: 'USD'
            });
        }
        // @ts-ignore
        if (cryptoData.ethereum) {
            // @ts-ignore
            const eth = cryptoData.ethereum;
            output.push({
                symbol: 'ETH',
                name: 'Ethereum',
                price: eth.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
                change: 0,
                changePercent: eth.usd_24h_change,
                currency: 'USD'
            });
        }

        return NextResponse.json({ data: output, lastUpdated: new Date().toISOString() });

    } catch (error) {
        console.error('Financial Data API Error:', error);
        return NextResponse.json({ error: 'Failed to fetch financial data' }, { status: 500 });
    }
}
