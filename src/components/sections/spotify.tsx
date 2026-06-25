import { useQuery } from "@tanstack/react-query";
import { SpotifyService } from "@/services/api/spotify.service.ts";
import { QueueResponse } from "@/services/models/spotify.models.ts";
import { get, slice } from "lodash";

import { MdExplicit } from "react-icons/md";
import NowPlaying from "@/components/ui/now-playing.tsx";

const Spotify = () => {
  const { data } = useQuery({
    queryKey: ["playing"],
    queryFn: SpotifyService.queue,
    refetchInterval: 5_000,
    // refetchIntervalInBackground: true
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
          <div className="leading-4">
            <p className="font-medium">
              <span className="mr-3">🎶</span>
              Daily Mix 1
            </p>
            <p className="text-muted-foreground text-end text-sm">50 tracks</p>
          </div>
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
          <div className="w-full py-2">
            <div className="flex items-center gap-2.5">
              <NowPlaying />
              <div className="leading-3">
                <div>
                  <h2 className="text-lg font-semibold text-ellipsis whitespace-nowrap">
                    {get(queueResponse, "currently_playing.name", "")}
                  </h2>
                  <div className="flex items-center gap-1">
                    {get(queueResponse, "currently_playing.explicit", false) && (
                      <div>
                        <MdExplicit className="size-3.5" />
                      </div>
                    )}

                    <div>
                      <p className="">
                        {get(queueResponse, "currently_playing.artists[0].name", "")}
                      </p>
                    </div>
                  </div>
                </div>
                <div></div>
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
                      <p className="text-ellipsis whitespace-nowrap">{get(item, "name", "")}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <div>
                        {get(item, "explicit", false) && (
                          <div>
                            <MdExplicit className="size-3.5" />
                          </div>
                        )}
                      </div>

                      <div>
                        <p>{get(item, "artists[0].name", "")}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm">{convertDuration(get(item, "duration_ms", 0))}</p>
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
