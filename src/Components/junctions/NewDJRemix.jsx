import axios from 'axios';
import { PiArrowSquareUpLight } from 'react-icons/pi'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import '../../styles/Pages.css';

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
      const TopSongs = await axios.get("https://saavn.dev/api/search/songs?query=dj&limit=50")
      const { data } = TopSongs.data
      setPlaylists(data.results)
      console.log(data.results)
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

        <a onClick={() => navigate('/About')} className="btn-flip" data-back="Back" data-front="Dj-remix"></a>

        <form className="flex w-[30%] h-[30px] justify-self-center items-center bg-white rounded-[20px] p-4" onSubmit={handleSearch} role="search">
          <input
            className="border-none outline-none h-[30px] w-full"
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
      <div className="">
        <div className="flex gap-[5em] overflow-x-scroll">
          {albums?.map((album) => (
            <div key={album.id} className="flex flex-col overflow-y-clip justify-center items-center text-white gap-[3em] px-10 h-[90vh]">
              <img className="ImageGuards" src={album.image[2].url} alt={`Cover for ${album.name}`} />
              <div>
                <p className="text-white">{album.artists.all[0].name}</p>
                <audio controls src={album.downloadUrl[4].url}></audio>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Displaying Playlist Songs */}
      <div className="grid grid-cols-4  gap-[5em]">
        {playlists?.map((playlist) => (
          <div className="flex flex-col p-[30px]! justify-center items-center" key={playlist.id}>
            <img className="ImageGuards" src={playlist.image[2].url} alt={playlist.name} />
            <div>
              <p className="text-white text-center">{playlist.artists.all[0].name}</p>

              <audio controls src={playlist.downloadUrl[4].url}></audio>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 right-0 bg-blur">
        <a className="back" href="#back"><PiArrowSquareUpLight size={75} /></a>
      </div>
    </div>
  );
}
