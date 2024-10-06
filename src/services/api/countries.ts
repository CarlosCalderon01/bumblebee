// src/services/api/countries.ts
import axios from 'axios';

const API_URL = 'http://localhost:3001/global/countries';

export const getCountries = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createCountry = async (country: { name: string }) => {
  const response = await axios.post(API_URL, country);
  return response.data;
};

export const updateCountry = async (id: number, country: { name: string }) => {
  const response = await axios.put(`${API_URL}/${id}`, country);
  return response.data;
};

export const deleteCountry = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
