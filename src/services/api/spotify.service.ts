import { http_client } from "@/services/api-client.ts";
import { ApiResponse } from "@/services/models/general.models.ts";
import { QueueResponse } from "@/services/models/spotify.models.ts";

export const SpotifyService = {
  login: () => {
    return `${http_client.getUri()}/window/login`;
  },
  currently_playing: () => {
    return http_client.get("/window");
  },
  queue: (): Promise<ApiResponse<QueueResponse>> => {
    return http_client.get("/window/queue");
  },
};
