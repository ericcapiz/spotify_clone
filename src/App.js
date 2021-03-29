import React,{useEffect, useState} from 'react';
import {getTokenFromUrl} from './spotify';
import { useDataLayerValue } from './components/State/DataLayer';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();


function App() {

  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;
    
    if(_token){
      setToken(_token);
      //gives token to the spotify web api
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log('user logged in:', user);
      })
    }
    
    
    console.log('token', _token);
  },[]);

  return (
    <div className="app">
      {
        token ? 
          <Player />
         : 
          <Login />
        
      }
    </div>
  );
}

export default App;
