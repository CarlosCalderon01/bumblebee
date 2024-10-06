// src/components/forms/Countries.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { getCountries, createCountry, updateCountry, deleteCountry } from '../../services/api/countries';

interface Country {
  id: number;
  name: string;
}

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [newCountry, setNewCountry] = useState<string>('');
  const [editCountry, setEditCountry] = useState<Country | null>(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const data = await getCountries();
    setCountries(data);
  };

  const handleCreate = async () => {
    if (newCountry.trim()) {
      await createCountry({ name: newCountry });
      setNewCountry('');
      fetchCountries();
    }
  };

  const handleEdit = async (country: Country) => {
    setEditCountry(country);
  };

  const handleUpdate = async () => {
    if (editCountry) {
      await updateCountry(editCountry.id, { name: editCountry.name });
      setEditCountry(null);
      fetchCountries();
    }
  };

  const handleDelete = async (id: number) => {
    await deleteCountry(id);
    fetchCountries();
  };

  return (
    <div>
      <h1>Countries</h1>

      <div>
        <input
          type="text"
          value={newCountry}
          onChange={(e) => setNewCountry(e.target.value)}
          placeholder="New Country"
        />
        <button onClick={handleCreate}>Add Country</button>
      </div>

      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            {editCountry?.id === country.id ? (
              <>
                <input
                  type="text"
                  value={editCountry.name}
                  onChange={(e) => setEditCountry({ ...editCountry, name: e.target.value })}
                />
                <button onClick={handleUpdate}>Update</button>
                <button onClick={() => setEditCountry(null)}>Cancel</button>
              </>
            ) : (
              <>
                {country.name}
                <button onClick={() => handleEdit(country)}>Edit</button>
                <button onClick={() => handleDelete(country.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
