
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import useTitle from '../hooks/useTitle';


export default function SetlistInCity() {
  useTitle('City');

  const { id } = useParams();
  const [setlists, setSetlists] = useState<any[]>([]);

  useEffect(() => {
    const fetchSetlistsInCity = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/search/cityId`, {
            params: {
                cityId: id
            }
            });
            setSetlists(response.data.setlist);
        }
        catch (err) {
            console.error(err);
        };
      };
    fetchSetlistsInCity();
  }, [id]);

  const handleToggleSetlist = (data: any) => {
    data.showSetlist = !data.showSetlist;
    setSetlists([...setlists]);
  };

  return (
    <>
      <NavBar />
        <main>
        {setlists.length > 0 && (
            <>
            <h2>Setlists in { setlists[0].venue.city.name }</h2>
              {setlists.map((data) => (
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