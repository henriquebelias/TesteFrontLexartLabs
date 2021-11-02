import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteItem, getAll } from '../services/api';

function StockTable() {
  const [stockItems, setStockItems] = useState([]);

  const fetchItems = async () => {
    const response = await getAll();
    setStockItems(response);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const deleteEntry = async (id) => {
    await deleteItem(id);
    await fetchItems();
  };

  return (
    <>
      <h1>ABM Stock</h1>
      <table>
        <thead>
          <tr>
            <td>_Id</td>
            <td>Quantity</td>
            <td>Product Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          { stockItems && stockItems.map(({ _id, quantity, price, product: { name } }) => (
            <tr key={ _id }>
              <td>{ _id }</td>
              <td>{ quantity }</td>
              <td>{ name }</td>
              <td>$ { price }</td>
              <td>
                <Link to={ { pathname: '/register', state: { id: _id } } }>
                  <button>Select</button>
                </Link>
              </td>
              <td><button onClick={ () => deleteEntry(_id) }>Delete</button></td>
            </tr>
          )) }
        </tbody>
      </table>
    </>
  )
}

export default StockTable;
