import axios from "axios";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const api_url = `${BASE_URL}/api`;

export const http_client = axios.create({
  baseURL: api_url,
  headers: {
    "Content-Type": "application/json",
  },
});

http_client.interceptors.request.use(
  (config) => {
    // this code will be revised when we add authentication

    // const access_token = StorageService.getAccessToken();
    //
    // const authorised_urls = new Set([
    //   ""
    // ])

    // const is_authorised_url = authorised_urls.has(config.url as string);
    //
    // const authorisation_header: AxiosHeaderValue | undefined = get(
    //   config,
    //   "headers.Authorization",
    //   null
    // );

    // add content the access token to the request
    // if (!access_token) return config;

    // set(config, "headers.Authorization", `Bearer ${access_token}`)

    return config;
  },
  async (error) => {
    await Promise.reject(error);
  },
);

http_client.interceptors.response.use(
  ({ data }) => {
    return data;
  },

  (error) => {
    if (error.code === "ERR_NETWORK") {
      console.error("NETWORK ERROR");
      return Promise.reject(error);
    }

    // forward the problem detail body to the callers
    const problemDetail = error.response?.data ?? error;
    return Promise.reject(problemDetail);
  },
);
