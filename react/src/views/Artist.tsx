
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import useTitle from '../hooks/useTitle';


export default function Artist() {
  useTitle('Artist');

  const { mbid } = useParams();
  const [artist, setArtist] = useState<any[]>([]);

  const handleToggleSetlist = (data: any) => {
    data.showSetlist = !data.showSetlist;
    setArtist([...artist]);
  };

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/artists/${mbid}/setlists`, {
          params: {
            artistId: mbid
          }
        });
        setArtist(response.data.setlist);
      } catch (err) {
        console.error(err);
      };
    };
    fetchArtist();
  }, [mbid]);

  return (
    <>
      <NavBar />
        <main>
            {artist.length > 0 && (
              <>
                <h2>{artist[0].artist.name}</h2>
                {artist.map((data) => (
                  <div key={data.id}>
                    <table>
                      <thead>
                        <tr onClick={() => handleToggleSetlist(data)}>
                          <th>
                            {data.artist.name} at {data.venue.name} ({data.venue.city.name}, {data.venue.city.country.name})
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.showSetlist && (
                          data?.sets?.set[0]?.song.map((item: any, index: number) => (
                            <tr key={item.name}>
                              <td>{index + 1}. {item.name}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                ))}
              </>
            )}
        </main>
      <Footer />
    </>
  );
};