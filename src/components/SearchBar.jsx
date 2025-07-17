import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function SearchBar({ search, setSearch, suggestions }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (coinName) => {
    setSearch(coinName);
    setShowDropdown(false);
  };

  const filteredSuggestions = search
    ? suggestions.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      )
    : suggestions;

  return (
    <div className="d-flex justify-content-center mt-4">
      <div
        className="position-relative w-100"
        style={{ maxWidth: "500px" }}
      >
        <div className="input-group shadow-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Search crypto..."
            value={search}
            onFocus={() => setShowDropdown(true)}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowDropdown(true);
            }}
          />
          <span
            className="input-group-text bg-white"
            onClick={() => setShowDropdown(!showDropdown)}
            style={{ cursor: "pointer" }}
          >
            <FaChevronDown />
          </span>
        </div>

        {showDropdown && filteredSuggestions.length > 0 && (
          <ul
            className="list-group position-absolute w-100 z-3 shadow"
            style={{
              maxHeight: "200px",
              overflowY: "auto",
              top: "100%",
              left: 0,
            }}
          >
            {filteredSuggestions.slice(0, 20).map((coin) => (
              <li
                key={coin.id}
                className="list-group-item list-group-item-action"
                onClick={() => handleSelect(coin.name)}
                style={{ cursor: "pointer" }}
              >
                {coin.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
