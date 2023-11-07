import { addZero } from "./addZero";
import axios from "axios";

const baseUrl = 'https://min-api.cryptocompare.com/data';
const currency = 'USD';
const symbol = 'BTC'

export async function fetchHistoricalPrices(days) {
    try {
        const date = new Date();

        const endDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
        date.setDate(date.getDate() - days);
        const startDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;

        const response = await axios.get(`${baseUrl}/v2/histoday?fsym=${symbol}&tsym=${currency}&limit=${days}`);

        const historicalPrices = response.data.Data.Data;

        // console.log(`Preços históricos para ${symbol} nos últimos ${days} dias:`, historicalPrices);
        return historicalPrices;
    }
    catch (error) {
        console.error('Erro ao buscar preços históricos:', error);
    }
}

