
import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMapEvents } from 'react-leaflet';
import axios from 'axios';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import useTitle from '../hooks/useTitle';


export default function Maps() {
  useTitle('Maps');

  const [userClickedOnMap, setUserClickedOnMap] = useState(false);
  const [setlistsInCity, setSetlistsInCity] = useState<any[]>([]);
  const [cityName, setCityName] = useState<string>('');
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const handleMapClick = async (e: any) => {
    try {
      const { lat, lng } = e.latlng;
      setLat(lat);
      setLng(lng);
      setUserClickedOnMap(true);
  
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=e1fd90b1c0f9411d87295dd0a123240f&pretty=1`);
      const results = response.data.results;
      const cityNameString = results[0].components.city;
      setCityName(cityNameString);
      handleConcertsInArea(true);
    } catch (err) {
      console.error(err);
    };
  };

  const fetchSetlistsInCity = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/search/cityName/${cityName}`, {
        params: {
          cityName: cityName,
        },
      });
      setSetlistsInCity(response.data.setlist);
    } catch (err) {
      console.error(err);
    };
  };

  const handleConcertsInArea = async (concertInArea: boolean) => {
    setUserClickedOnMap(true);

    if (!concertInArea) {
      setSetlistsInCity(["There are no concerts in this area"]);
    } else {
      await fetchSetlistsInCity();
    };
  };

  interface MapEventsProps {
    onMapClick: (e: any) => void;
  };

  const MapEvents = ({ onMapClick }: MapEventsProps) => {
    useMapEvents({
      click: (e) => {
        onMapClick(e);
      },
    });
    return null;
  };

  return (
    <>
      <NavBar />
        <main>
          <h1 className='center-content'>Map</h1>
            <MapContainer center={[55, 12]} zoom={6} style={{ height: '400px', width: '80%', margin: 'auto' }}>
              <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              maxZoom={19} attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a>'/>
              {userClickedOnMap && (
                <Circle center={[lat, lng]} color="blue" fillColor="blue" fillOpacity={0.5} radius={10000}>
                  <Popup>You clicked the map at ({lat}, {lng}). Recent setlists in this area are listed below</Popup>
                </Circle>
              )}
              <MapEvents onMapClick={handleMapClick} />
            </MapContainer>
              <div className='center-content'>
              <h3>Recent setlists in the selected area</h3>
                {setlistsInCity.length > 0 ? (
                  <ul>
                    {setlistsInCity.map((setlist) => (
                      <li key={setlist.id}>
                        <a href={`/artists/${setlist.artist.mbid}`}>{setlist.artist.name}</a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>There are no concerts in this area</p>
                )}
              </div>
        </main>
      <Footer />
    </>
  );
};