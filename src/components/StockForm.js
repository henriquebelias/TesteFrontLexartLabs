import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createItem } from '../services/api';

const INITIAL_STATE = {
  quantity: '',
  price: '',
};

const Product = {
  name: '',
};

const Client = {
  name: '',
}

const STATUS = {
  active: false,
}

function StockForm() {
  const [stockInfo, setStockInfo] = useState(INITIAL_STATE);
  const [productInfo, setProductInfo] = useState(Product);
  const [clientInfo, setClientInfo] = useState(Client);
  const [productStatus, setProductStatus] = useState(STATUS);
  const [entryRegistered, setEntryRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createItem({
      quantity: stockInfo.quantity,
      price: stockInfo.price,
      product: productInfo,
      client: clientInfo,
      active: productStatus.active
    });

    return response && setEntryRegistered(true);
  };

  const handleStock = ({ target: { name, value } }) => (
    setStockInfo({ ...stockInfo, [name]: value })
  );

  const handleProduct = ({ target: { value } }) => (
    setProductInfo({ ...productInfo, name: value })
  );

  const handleClient = ({ target: { value } }) => (
    setClientInfo({ ...clientInfo, name: value })
  );

  const handleStatus = () => (
    setProductStatus({ ...productStatus, active: !productStatus.active })
  );

  return (
    <form onSubmit={ handleSubmit }>

      <label htmlFor="productName">Inform the product name:</label>
      <input
        type="text"
        id="productName"
        autoComplete="off"
        value={ productInfo.name }
        onChange={ handleProduct }
      />

      <label htmlFor="productQuantity">Inform the stock quantity:</label>
      <input
        type="text"
        name="quantity"
        id="productQuantity"
        autoComplete="off"
        value={ stockInfo.quantity }
        onChange={ handleStock }
      />

      <label htmlFor="productPrice">Inform the product price:</label>
      <input
        type="text"
        name="price"
        id="productPrice"
        autoComplete="off"
        value={ stockInfo.price }
        onChange={ handleStock }
      />

      <label htmlFor="clientName">Inform the client name:</label>
      <input
        type="text"
        id="clientName"
        autoComplete="off"
        value={ clientInfo.name }
        onChange={ handleClient }
      />

      <label htmlFor="productStatus">It has stock?</label>
      <input
        type="checkbox"
        id="productStatus"
        value={ productStatus.active }
        onChange={ handleStatus }
      />

      <button type="submit">Create Entry</button>

      <Link to="/">
        <button disabled={ !entryRegistered }>Home</button>
      </Link>

    </form>
  )
}

export default StockForm;
