export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-ec.vercel.app/";




const clientId = "a05ca0c9debe4e369b7f136e5ce427d3";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
  .substring(1)
  .split("&")
  .reduce((initial, item) => {
    let parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  }, {});
  };
  
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;