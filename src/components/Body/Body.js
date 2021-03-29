import React from 'react';
import Header from '../Header/Header';
import FavoriteIcon  from '@material-ui/icons/Favorite';
import  PlayCircleFilledIcon  from '@material-ui/icons/PlayCircleFilled';
import { useDataLayerValue } from '../State/DataLayer';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Body.css';

const Body = ({spotify}) => {
    const[{discover_weekly}, dispatch] = useDataLayerValue();
    console.log("discover",discover_weekly)
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
               <img src={discover_weekly?.images[0].url} />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
            <div className="body__icons">
                <PlayCircleFilledIcon />
                <FavoriteIcon />
                <MoreHorizIcon />
            </div>
            </div>
        </div>
    )
}

export default Body
