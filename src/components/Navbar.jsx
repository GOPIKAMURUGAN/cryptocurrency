import { Link } from 'react-router-dom';
import { FaBitcoin } from 'react-icons/fa';
import { useState } from 'react';
import AuthForm from './AuthForm'; // Make sure this path is correct

function Navbar({ currency, setCurrency }) {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <FaBitcoin size={24.5} color="white" />
          Cryptoplace
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/features">Features</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            <select
              className="form-select form-select-sm"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="inr">INR</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
            <button className="btn btn-outline-light" onClick={() => setShowAuth(true)}>
              Signup
            </button>
          </div>
        </div>
      </nav>

      {/* Modal for Auth Form */}
      {showAuth && (
        <div className="modal-backdrop-custom">
          <div className="modal-content-custom">
            <button
              className="btn btn-sm btn-danger close-btn"
              onClick={() => setShowAuth(false)}
            >
              ×
            </button>
            <AuthForm onLoginSuccess={() => setShowAuth(false)} />

          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
