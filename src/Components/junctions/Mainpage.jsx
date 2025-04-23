import { useNavigate } from 'react-router-dom'
import Content from './Content'
function Mainpage() {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <nav className="bg-transparent border-2 border-white m-3 rounded-full flex gap-[23rem] items-center max-sm:gap-[1rem] max-sm:m-[1px] ">
                    <img className=" h-[8rem] p-1 rounded-full" onClick={() => navigate('/Login')} src="/image.png" alt="" />
                    <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-white max-sm:text-xl ">
                        M2 CONNECT
                    </p>
                    <button onClick={() => navigate('/Login')} className="border ml-50 rounded-full w-[8rem] p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-lg max-sm:text-sm hover:text-2xl hover:w-[8rem] hover:bg-gradient-to-r hover:from-gray-500 hover:to-white transition-all duration-300 ease-in-out cursor-pointer" type="submit">
                        Logout
                    </button>
                </nav>
            </div>
            <div className="m-3 flex max-sm:flex-none">
                <div className="buttons">
                    <div className='text-black flex flex-col gap-2 w-[18rem] max-sm:w-[10rem]'>
                        <input onClick={() => navigate('/LatestBollywood')} className="hoverButton" type="button" value="Latest Bollywood"/>
                        <input onClick={() => navigate('/LatestPunjabi')} className="hoverButton" type="button" value="Latest Punjabi" />
                        <input onClick={() => navigate('/LatestIndiPOP')} className="hoverButton" type="button" value="Latest IndiPOP" />
                        <input onClick={() => navigate('/TopSong2024')} className="hoverButton" type="button" value="Tops Songs 2024" />
                        <input onClick={() => navigate('/Anime')} className="hoverButton" type="button" value="Anime" />
                        <input onClick={() => navigate('/HaryanviSongs')} className="hoverButton" type="button" value="Haryanvi Songs" />
                        <input onClick={() => navigate('/NewRingTones')} className="hoverButton" type="button" value="New Ringtones" />
                        <input onClick={() => navigate('/NewDJRemix')} className="hoverButton" type="button" value="New DJ Remix" />
                    </div>
                </div>
                <Content />
            </div>
        </div>
    )
}

export default Mainpage