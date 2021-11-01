import axios from "axios";

const URL = 'https://crudcrud.com/api/9d9d122b51c447e2b1aea0543b91339e';

export const getAll = async () => {
  const { data } = await axios.get(`${URL}/stock`);

  return data;
};

export const getById = async (id) => {
  const { data } = await axios.get(`${URL}/stock/${id}`);

  return data;
};

export const createItem = async (body) => {
  const { data } = await axios.post(`${URL}/stock`, body);

  return data;
};

export const updateItem = async (id, body) => {
  const { data } = await axios.put(`${URL}/stock/${id}`, body);

  return data;
};

export const deleteItem = async (id) => {
  const { data } = await axios.delete(`${URL}/stock/${id}`);

  return data;
};
