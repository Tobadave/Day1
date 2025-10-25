import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import videoFile from "../../assets/samplevid.mp4";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden py-10">
      {/* Half white / blue background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-white"></div>
        <div className="h-1/2 bg-blue-600"></div>
      </div>

      {/* Video Container */}
      <div className="relative z-1 w-3/4 md:w-2/3 rounded-lg overflow-hidden shadow-lg border-2 border-white">
        <video
          ref={videoRef}
          src={videoFile}
          className="w-full h-full object-cover"
          muted
        />

        {/* Play / Pause Button */}
        <button
          onClick={handleTogglePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isPlaying ? (
            <Pause className="w-16 h-16 text-white bg-black/50 p-4 rounded-full" />
          ) : (
            <Play className="w-16 h-16 text-white bg-black/50 p-4 rounded-full" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Video;
