import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const coins = [
  {
    id: 1,
    name: 'Ethereum',
    price: '$168,331.09',
    change: '+45%',
    icon: '🟢',
    trend: 'up',
  },
  {
    id: 2,
    name: 'Bitcoin',
    price: '$24,098',
    change: '+45%',
    icon: '🟠',
    trend: 'up',
  },
  {
    id: 3,
    name: 'Litecoin',
    price: '$667,224',
    change: '-46%',
    icon: '🔵',
    trend: 'down',
  },
  {
    id: 4,
    name: 'Monero',
    price: '$667,224',
    change: '+45%',
    icon: '🟣',
    trend: 'up',
  },
];

const Feature = () => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container-fluid position-relative max-vh-250 bg-dark text-white py-5">
  <div className="row justify-content-center">
    <div className="col-12 col-xl-10">
      <h1 className="display-5 mb-4 text-center">Feature Page</h1>

      {/* Search Box */}
      <div className="mb-4 mx-auto" style={{ maxWidth: '400px' }}>
        <div className="input-group">
          <span className="input-group-text bg-secondary border-0 text-light">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control bg-secondary text-light border-0"
            placeholder="Search coins..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Coin Cards */}
      <div className="row g-4">
        {filteredCoins.map((coin) => (
          <div className="col-12 col-sm-6 col-md-3" key={coin.id}>
            <div
              className="card h-100 text-light bg-secondary border-0 shadow coin-card"
              onClick={() => setSelected(coin)}
              style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div className="card-body text-center">
                <div className="display-4">{coin.icon}</div>
                <h5 className="card-title mt-2">{coin.name}</h5>
                <p className="card-text h5">{coin.price}</p>
                <p className={`card-text ${coin.trend === 'up' ? 'text-success' : 'text-danger'}`}>
                  {coin.change} This week
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Coin Details */}
      {selected && (
        <div className="mt-5 p-4 bg-secondary rounded shadow">
          <h2 className="h4 mb-3">{selected.name} Statistics</h2>
          <p className="mb-1">💰 Price: <strong>{selected.price}</strong></p>
          <p className="mb-1">📊 Weekly Change: <strong>{selected.change}</strong></p>
          <p className="mb-1">📈 Trend: <strong>{selected.trend === 'up' ? 'Up 📈' : 'Down 📉'}</strong></p>
        </div>
      )}
    </div>
  </div>
</div>


  );
};

export default Feature;
