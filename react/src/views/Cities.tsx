
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, TextField } from '@mui/material';
import axios from 'axios';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import useTitle from '../hooks/useTitle';


export default function Cities() {
  useTitle('Cities');

  const [cities, setCities] = useState<any[]>([]);
  const [searchString, setSearchString] = useState('');

  const fetchCities = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/search/cities', {
        params: {
          city: searchString,
        },
      });
      setCities(response.data.cities);
    } catch (err) {
      console.error(err);
    };
  };

  const handleSearch = async () => {
    await fetchCities();
  };

  return (
    <>
      <NavBar />
        <main className="center-content">
          <h1>Cities</h1>
          <TextField className="search-input" label="Search for city..." variant="outlined"
          value={searchString} onKeyUp={handleSearch} onChange={(e) => setSearchString(e.target.value)}/>
          <List>
            {cities.map((city) => (
              <ListItem key={city.id}>
                <Link to={`/cities/${city.id}`}>
                  <ListItemText primary={`${city.name} (${city.state}, ${city.country.name})`}/>
                </Link>
              </ListItem>
            ))}
          </List>
        </main>
      <Footer />
    </>
  );
};