
import React, { useState } from 'react';
import { List, ListItem, ListItemText, TextField } from '@mui/material';
import axios from 'axios';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import useTitle from '../hooks/useTitle';


export default function Venues() {
  useTitle('Venues');

  const [venues, setVenues] = useState<any[]>([]);
  const [searchString, setSearchString] = useState('');

  const fetchVenues = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/search/venues', {
        params: {
          venue: searchString,
        },
      });
      setVenues(response.data.venue);
    } catch (err) {
      console.error(err);
    };
  };

  const handleSearch = async () => {
    await fetchVenues();
  };

  return (
    <>
      <NavBar />
        <main className="center-content">
          <h1>Venues</h1>
          <TextField className="search-input" label="Search for venue..." variant="outlined"
          value={searchString} onKeyUp={handleSearch} onChange={(e) => setSearchString(e.target.value)}/>
          <List>
            {venues.map((venue) => (
              <ListItem key={venue.mbid}>
                <a href={venue.url} target="_blank" rel="noreferrer">
                  <ListItemText primary={`${venue.name} (${venue.city.name}, ${venue.city.country.name})`}/>
                </a>
              </ListItem>
            ))}
          </List>
        </main>
      <Footer />
    </>
  );
};