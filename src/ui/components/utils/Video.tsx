import { useState } from "react";
interface VideoProps {
  thumbnail: string;
  link: string;
}

export function Video(props: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const videoLink = props.link || ""; // Fallback para string vazia se `props.link` for undefined

  return (
    <div className="relative flex h-screen max-h-[200px] w-full items-center justify-center lg:max-h-[800px]">
      {isPlaying ? (
        <iframe
          width="100%"
          height="100%"
          src={`${videoLink.replace("watch?v=", "embed/")}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute left-0 top-0 h-full w-full"
        ></iframe>
      ) : (
        <div
          onClick={handlePlayVideo}
          style={{ backgroundImage: `url(${props.thumbnail})` }}
          className="relative flex h-full w-full cursor-pointer items-center justify-center bg-cover bg-center bg-no-repeat"
        >
          {/* <Icons icon="video-dark" className="z-50 h-14 w-14 md:h-32 md:w-32" /> */}
        </div>
      )}
    </div>
  );
}
