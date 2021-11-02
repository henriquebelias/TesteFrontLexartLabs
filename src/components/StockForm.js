import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { createItem, getById, updateItem } from '../services/api';
import { FormContainer } from './StockForm.sc';

const INITIAL_STATE = {
  quantity: '',
  price: '',
  product: { name: '' },
  client: { name: '' },
  active: false,
}

function StockForm() {
  const location = useLocation();
  const [itemState, setItemState] = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await getById(location.state?.id);
      setItemState(response);
    };

    if (location.state?.id) {
      fetchItem();
    }
  }, [location.state?.id]);

  const handleState = ({ target: { name, value } }) => {
    if (name === 'product') {
      setItemState({ ...itemState, product: { 'name': value } });
    } else if (name === 'client') {
      setItemState({ ...itemState, client: { 'name': value } });
    } else if (name === 'active') {
      setItemState({ ...itemState, active: !itemState.active });
    } else {
      setItemState({ ...itemState, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = location.state?.id
        ? await updateItem(location.state?.id, itemState)
        : await createItem(itemState);

      return response && setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <FormContainer>
      <form onSubmit={ handleSubmit }>

        <label htmlFor="productName">Inform the product name:</label>
        <input
          type="text"
          name="product"
          id="productName"
          autoComplete="off"
          value={ itemState.product.name }
          onChange={ handleState }
        />

        <label htmlFor="productQuantity">Inform the stock quantity:</label>
        <input
          type="text"
          name="quantity"
          id="productQuantity"
          autoComplete="off"
          value={ itemState.quantity }
          onChange={ handleState }
        />

        <label htmlFor="productPrice">Inform the product price:</label>
        <input
          type="text"
          name="price"
          id="productPrice"
          autoComplete="off"
          value={ itemState.price }
          onChange={ handleState }
        />

        <label htmlFor="clientName">Inform the client name:</label>
        <input
          type="text"
          name="client"
          id="clientName"
          autoComplete="off"
          value={ itemState.client.name }
          onChange={ handleState }
        />

        <div>
          <label htmlFor="productStatus">It has stock?</label>
          <input
            type="checkbox"
            name="active"
            id="productStatus"
            checked={ itemState.active }
            value={ itemState.active }
            onChange={ handleState }
          />
        </div>

        <button type="submit">Save</button>

        <Link
          to={ location.state?.id ? "/stock-table" : "/" }
        >
          <button disabled={ !submitted }>Go Back</button>
        </Link>

      </form>
    </FormContainer>
  )
}

export default StockForm;
