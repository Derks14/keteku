import { useQuery } from "@tanstack/react-query";
import { SpotifyService } from "@/services/api/spotify.service.ts";
import { QueueResponse } from "@/services/models/spotify.models.ts";
import { get, slice } from "lodash";

import { PauseIcon } from "@heroicons/react/24/solid";

const Spotify = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["playing"],
    queryFn: SpotifyService.queue,
    refetchInterval: 10_000,
  });

  const queueResponse: QueueResponse = data?.data ?? ({} as QueueResponse);
  console.log(queueResponse);

  const convertDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);

    // Format as MM:SS
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <>
      <div className="flex h-full w-full flex-col justify-between overflow-hidden p-1 leading-5 font-stretch-condensed">
        <div className="my-2 flex items-start justify-between">
          <div className="">
            <img
              className="aspect-auto h-10"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
              alt=""
            />
          </div>
          <div>two</div>
        </div>

        <div>
          {/* currently playing album art*/}

          <div className="flex items-center justify-center">
            <div>
              <img
                className="aspect-square h-48 rounded-md"
                src={get(
                  queueResponse,
                  "currently_playing.album.images[0].url",
                  "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
                )}
                alt="currently playing album art"
              />
            </div>
          </div>

          {/* currently playing details*/}
          <div className="py-2 w-full">
            <div className="flex items-center gap-2.5 ">
              <div className="bg-[#1DB954] mt-2 animate-pulse text-white font-bold rounded-full p-1.5">
                <PauseIcon className="size-5" />
              </div>
              <div className=" leading-3">
                <div>
                  <h2 className="text-lg font-semibold text-ellipsis whitespace-nowrap">
                    {get(queueResponse, "currently_playing.name", "Best I ever had")}
                  </h2>
                  <p className="">
                    {get(queueResponse, "currently_playing.artists[0].name", "Top boy")}
                  </p>
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>

        </div>


        {/* queue starts here */}
        <div>
          {slice(queueResponse.queue, 0, 3).map((item) => (
            <div key={item.id} className="my-2">
              <div className="flex items-start gap-2">
                <div className="aspect-square h-12">
                  <img
                    className="rounded-md"
                    src={get(
                      item,
                      "album.images[0].url",
                      "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
                    )}
                    alt="album art"
                  />
                </div>

                <div className="flex flex-1 items-start justify-between">
                  <div>
                    <div className="font-semibold">
                      <p className="text-ellipsis whitespace-nowrap">{get(item, "name", "Sega")}</p>
                    </div>
                    <div>
                      <p>{get(item, "artists[0].name", "John Doe")}</p>

                    </div>
                  </div>

                  <div>
                    <p className="text-sm">{convertDuration(get(item, "duration_ms", 0))}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Spotify;