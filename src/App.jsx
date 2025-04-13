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
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<Mainpage />} />
          <Route path="/LatestBollywood" element={<LatestBollywood />} />
          <Route path="/Anime" element={<Anime />} />
          <Route path="/LatestPunjabi" element={<LatestPunjabi />} />
          <Route path="/LatestIndiPOP" element={<LatestIndiPOP />} />
          <Route path="/TopSong2024" element={<TopSongs2024 />} />
          <Route path="/HaryanviSongs" element={<HaryanviSongs />} />
          <Route path="/NewRingTones" element={<NewRingTones />} />
          <Route path="/NewDJRemix" element={<NewDJRemix />} />
          <Route path="*" element={<Navigate to="/About" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
