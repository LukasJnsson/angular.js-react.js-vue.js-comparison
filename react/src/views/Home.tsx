
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, TextField } from '@mui/material';
import axios from 'axios';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import useTitle from '../hooks/useTitle';


export default function Home() {
  useTitle('Home');

  const [artists, setArtists] = useState<any[]>([]);
  const [searchString, setSearchString] = useState('');

  const fetchArtists = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/search/artists', {
        params: {
          artist: searchString,
        },
      });
      setArtists(response.data.artist);
    } catch (err) {
      console.error(err);
    };
  };

  const handleSearch = async (event: any) => {
    await fetchArtists();
  };

  return (
    <>
      <NavBar />
        <main className="center-content">
          <h1>Home</h1>
            <TextField className="search-input" label="Search for artist..." variant="outlined"
            value={searchString} onKeyUp={handleSearch} onChange={(e) => setSearchString(e.target.value)}/>
            <List>
              {artists.map((artist) => (
                <ListItem button component={Link} to={`/artists/${artist.mbid}`} key={artist.mbid}>
                  <ListItemText primary={artist.name} />
                </ListItem>
              ))}
            </List>
        </main>
      <Footer />
    </>
  );
};