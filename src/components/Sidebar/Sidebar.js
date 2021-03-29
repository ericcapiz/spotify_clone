import React from 'react';
import SidebarOption from '../SidebarOption/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../State/DataLayer';
import './Sidebar.css';

const Sidebar = () => {
    const[{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="sidebar"/>
            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <br />
            <strong className="sidebar__title">Playlists</strong>
            <hr />
            {playlists?.items?.map((playlist) => (
                <SidebarOption key={playlist.name} title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar
