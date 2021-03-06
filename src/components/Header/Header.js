import React from 'react';
import { useDataLayerValue } from '../State/DataLayer';
import { Avatar } from '@material-ui/core';
import  SearchIcon  from '@material-ui/icons/Search';
import './Header.css';

const Header = ({spotify}) => {
    const[{user, search}] = useDataLayerValue();



    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon value={search}  />
                <input placeholder="Search for Artists, Songs, or Podcasts" type="text" />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>Hello, {user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
