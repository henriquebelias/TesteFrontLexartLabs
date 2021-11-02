import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <h1>ABM Stock</h1>

      <Link to="/register">
        <button>Register a new stock item</button>
      </Link>

      <Link to="/stock-table">
        <button>List all the stock items</button>
      </Link>
    </>
  );
}

export default LandingPage;
