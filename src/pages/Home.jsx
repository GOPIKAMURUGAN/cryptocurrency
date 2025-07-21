import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CoinTable from "../components/CoinTable";
import { fetchCoins } from "../services/cryptoAPI";



function Home({ currency }) {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCoins(currency).then(setCoins);
  }, [currency]);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";

  return (
    <div className="container-fluid py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 ">
          <h1 className="display-4 display-md-3 display-sm-2 text-center">Largest Crypto Marketplace</h1>
          <p className="lead">
            Welcome to the world’s largest cryptocurrency marketplace. Sign up
            to explore more about cryptos.
          </p>
        </div>
        <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
          <SearchBar
            search={search}
            setSearch={setSearch}
            suggestions={coins}
          />
        </div>
        <div className="col-12">
          <CoinTable
            coins={search ? filteredCoins : coins.slice(0, 10)}
            currencySymbol={currencySymbol}
          />
        </div>
        




      </div>
    </div>
  );
}

export default Home;