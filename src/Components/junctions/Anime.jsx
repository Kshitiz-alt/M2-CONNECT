import axios from 'axios';
import { useState, useEffect } from 'react';
import { PiArrowSquareUpLight } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom';
import '../../styles/Pages.css';
import SongCard from '../Interfaces/SongCard';

export default function Anime() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

  // Fetch multiple songs
  const getPlaylists = async () => {
    setLoading(true)
    try {
      const TopSongs = await axios.get("https://saavn.dev/api/search/songs?query=demonslayer&limit=50")
      const { data } = TopSongs.data
      setPlaylists(data.results)
      // console.log(data.results)
    } catch (error) {
      console.error("Couldn't fetch data", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPlaylists();
  }, []);

  // Handle search functionality
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await axios.get(`https://saavn.dev/api/search/songs?query=${query}&limit=20`);
      const { data } = res.data;
      setAlbums(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pages">
      <nav id="back" className="flex items-center gap-[20em]">
        <a onClick={() => navigate('/About')} className="btn-flip" data-back="Back" data-front="Anime"></a>
        <form className="flex w-[30%] h-[30px] justify-self-center items-center bg-white rounded-[20px] p-4" onSubmit={handleSearch} role="search">
          <input
            className="outline-none border-none   h-[30px] w-full"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </nav>

      {loading && <div className="">Loading...</div>}


      {/* Displaying Searched Albums */}

      <div className="flex gap-[5em] overflow-x-scroll">
        {albums?.map((album) => (
           <SongCard
           key={album.id}
           image={album.image[2].url}
           artist={album.artists.all[0].name}
           audio={album.downloadUrl[4].url}
           />
        ))}
      </div>

      {/* Displaying Playlist Songs */}
      <div className="grid grid-cols-4  gap-[5em] ml-4 mr-4">
        {playlists?.map((playlist) => (
           <SongCard
           key={playlist.id}
           image={playlist.image[2].url}
           artist={playlist.artists.all[0].name}
           audio={playlist.downloadUrl[4].url}
           />
        ))}
      </div>
      <div className="fixed bottom-0 right-0 bg-blur">
        <a className="back" href="#back"><PiArrowSquareUpLight size={75}/></a>
      </div>
    </div>
  );
}
