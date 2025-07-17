import axios from 'axios';

export const fetchCoins = async (currency) => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets';
  const params = {
    vs_currency: currency,
    order: 'market_cap_desc',
    per_page: 100,
    page: 1,
    sparkline: false,
  };

  const res = await axios.get(url, { params });
  return res.data;
};
