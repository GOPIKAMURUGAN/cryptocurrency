// src/services/cryptoAPI.js

export const fetchCoins = async (currency = "usd") => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch coins:", error);
    return [];
  }
};
