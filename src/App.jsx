import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import Mainpage from './Components/junctions/Mainpage';
import LatestBollywood from './Components/junctions/LatestBollywood';
import LatestPunjabi from './Components/junctions/LatestPunjabi';
import LatestIndiPOP from './Components/junctions/LatestIndiPOP';
import TopSongs2024 from './Components/junctions/TopSongs2024';
import HaryanviSongs from './Components/junctions/HaryanviSongs';
import NewRingTones from './Components/junctions/NewRingTones';
import NewDJRemix from './Components/junctions/NewDJRemix';
import Anime from './Components/junctions/Anime';
import Signup from './Components/Login/Signup';
import Login from './Components/Login/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Mainpage />} />
          <Route path="/latestBollywood" element={<LatestBollywood />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/latestPunjabi" element={<LatestPunjabi />} />
          <Route path="/latestIndiPOP" element={<LatestIndiPOP />} />
          <Route path="/topSong2024" element={<TopSongs2024 />} />
          <Route path="/haryanviSongs" element={<HaryanviSongs />} />
          <Route path="/newRingTones" element={<NewRingTones />} />
          <Route path="/newDJRemix" element={<NewDJRemix />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
