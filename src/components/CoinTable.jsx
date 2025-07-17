import React from 'react';

function CoinTable({ coins, currencySymbol }) {
  return (
    <div className="table-responsive mt-4">
      <table className="table table-striped table-hover ">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Coins</th>
            <th>Price</th>
            <th>24H Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={coin.id}>
              <td>{index + 1}</td>
              <td>
                <img src={coin.image} alt={coin.name} width="24" className="me-2" />
                {coin.name.toUpperCase()} ({coin.symbol.toUpperCase()})
              </td>
              <td>{currencySymbol} {coin.current_price.toLocaleString()}</td>
              <td className={coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>{currencySymbol} {coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinTable;
