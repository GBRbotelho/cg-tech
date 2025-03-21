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

  const embedLink = props.link.includes("watch?v=")
    ? props.link.replace("watch?v=", "embed/")
    : props.link;

  if (props.link)
    return (
      <div className="relative flex h-screen max-h-[200px] w-full items-center justify-center lg:max-h-[800px]">
        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src={`${embedLink}?autoplay=1`}
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
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
              className="z-50 h-14 w-14 md:h-32 md:w-32"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#898a8b"
                stroke="none"
              >
                <path
                  d="M2321 5110 c-497 -48 -990 -251 -1376 -565 -114 -92 -294 -274 -384
  -387 -229 -287 -417 -675 -495 -1023 -49 -218 -60 -325 -60 -575 0 -250 11
  -357 60 -575 79 -355 272 -749 509 -1040 92 -114 274 -294 387 -384 287 -229
  675 -417 1023 -495 218 -49 325 -60 575 -60 250 0 357 11 575 60 261 58 603
  204 828 353 389 259 688 599 893 1016 125 255 196 484 241 775 24 161 24 539
  0 700 -45 291 -116 520 -241 775 -134 272 -283 480 -498 692 -211 209 -404
  346 -673 478 -252 124 -486 197 -765 240 -126 19 -468 27 -599 15z m507 -1995
  c524 -302 952 -552 952 -555 0 -4 -1887 -1098 -1912 -1108 -4 -2 -8 497 -8
  1108 0 611 4 1110 8 1108 5 -1 437 -250 960 -553z"
                />
              </g>
            </svg>
          </div>
        )}
      </div>
    );
}
