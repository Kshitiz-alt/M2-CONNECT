import { useState } from 'react';

const SongCard = ({ image, artist, audio }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-col justify-center items-center text-white"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className="ImageGuards" src={image} alt="Song Cover" />
      <p className="text-white">{artist}</p>
      <div className={` transition-all duration-500 ease-in-out ${hover ? "opacity-100" : "opacity-0"}`}>

        <audio controls src={audio} />
      </div>
      
    </div>
  );
};

export default SongCard;
