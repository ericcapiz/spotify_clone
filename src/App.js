import React,{useEffect} from 'react';
import {getTokenFromUrl} from './spotify';
import { useDataLayerValue } from './components/State/DataLayer';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();


function App() {
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;
    
    if(_token){

      dispatch({
        type:'SET_TOKEN',
        token: _token,
      })
      

      //gives token to the spotify web api
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        dispatch({
          type:"SET_USER",
          user: user,
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        })
      })
    }
  },[]);

  console.log('dispatched user:', user);
  console.log('dispatched token:', token);

  return (
    <div className="app">
      {
        token ? 
          <Player spotify={spotify} />
         : 
          <Login />
        
      }
    </div>
  );
}

export default App;
