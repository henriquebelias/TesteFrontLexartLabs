import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <h1>ABM Stock</h1>

      <Link to="/register">
        <button>Cadastre um novo produto</button>
      </Link>

      <Link to="/stock-table">
        <button>Veja os produtos cadastrados</button>
      </Link>
    </>
  );
}

export default LandingPage;
