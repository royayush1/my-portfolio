"use client";
import {useState, useEffect, useRef} from 'react';
import {
    MdPause,
    MdPlayArrow,
    MdSkipNext,
    MdVolumeOff,
    MdVolumeUp,
    MdLoop
  } from 'react-icons/md';
import {motion} from 'framer-motion';

const songs = [
    {title: "Attack on Titan: Chill Red Swan Lo-fi", url: "/music/Red Swan.mp3"},
    {title: "Pokemon Red & Blue: Opening Theme", url: "/music/Pokémon Red & Blue Music_ Opening Theme.mp3"},
    {title: "One Piece: Drums of Liberation", url: "/music/Drums of Liberation.mp3"},
    {title: "Assassins Creed II: Ezio's Family", url: "/music/Ezio's Family.mp3"},
    {title: "Attack on Titan: Barricades", url: "/music/Barricades.mp3"},
    {title: "Dragon Ball Z: Gohan's Theme", url: "/music/Gohan.mp3"},
]
export default function BackgroundMusic(){
    const [isMuted, setIsMuted] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    const [volume, setVolume] = useState(1);
    const [isLooping, setIsLooping] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current){
            audioRef.current.load();
            if (!isPaused){
                audioRef.current.play();
            }
        }
    }, [currentSongIndex]);

    useEffect(() => {
        if (audioRef.current){
            audioRef.current.muted = isMuted;
            audioRef.current.volume = volume;
            audioRef.current.loop = isLooping;
        }
    }, [isMuted, volume, isLooping]);

    const togglePause = () => {
        if (audioRef.current){
            if (isPaused){
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
        setIsPaused(!isPaused)
    };

    const skipSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length)
    }

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(parseFloat(e.target.value))
    }

    const toggleLoop = () => {
        setIsLooping((prev) => !prev)
    }

    return(
        <div className='fixed bottom-4 right-4 flex flex-col items-center space-y-2 bg-gray-800 p-3 rounded-lg shadow-lg z-50'>
            <audio 
                ref={audioRef}
                src={songs[currentSongIndex].url}
                autoPlay
                loop={isLooping}
                
                >
                
                Your browser does not support the audio element
                    
            </audio>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                className="bg-white text-gray-800 px-3 py-1 rounded-full shadow-md text-sm">

                    {songs[currentSongIndex].title}

            </motion.div>
            
            <div className='flex space-x-2'>
                <button onClick={togglePause} className='text-white p-2'>
                {isPaused ? (
                // Play Icon
                <MdPlayArrow size={24} />
            ) : (
                // Pause Icon
                <MdPause size={24} />
                
            )}
                </button>
            
            {/* Skip Button */}
            <button onClick={skipSong} className="text-white p-2">
                <MdSkipNext size={24} />
            </button>
            
            {/* Mute/Unmute Button */}
            <button onClick={() => setIsMuted(!isMuted)} className="text-white p-2">
            {isMuted ? (
                // Mute Icon
                <MdVolumeOff size={24} />
            ) : (
                // Unmute Icon
                <MdVolumeUp size={24} />
            )}
            </button>

            <button onClick={toggleLoop} className="text-white p-2">
            
                <MdLoop size={24} className={isLooping ? "opacity-100" : "opacity-50"}/>
           
            </button>
            
            
        </div>
        <input
            type='range'
            min='0'
            max='1'
            step='0.01'
            value={volume}
            onChange={handleVolumeChange}
            className='w-full mt-2'/>


        </div>
    )
}