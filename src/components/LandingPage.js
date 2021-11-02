import React from 'react';
import { Link } from 'react-router-dom';
import { MainContainer } from './LandingPage.sc';

function LandingPage() {
  return (
    <MainContainer>
      <div>
        <h1>ABM Stock</h1>

        <Link to="/register">
          <button>Register a new stock item</button>
        </Link>

        <Link to="/stock-table">
          <button>List all the stock items</button>
        </Link>
      </div>
    </MainContainer>
  );
}

export default LandingPage;
