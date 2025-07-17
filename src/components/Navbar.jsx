
import { Link } from 'react-router-dom';

function Navbar({ currency, setCurrency }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3">

      <Link className="navbar-brand" to="/">Cryptoplace</Link>
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
          <button className="btn btn-outline-light btn-sm">Sign up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
