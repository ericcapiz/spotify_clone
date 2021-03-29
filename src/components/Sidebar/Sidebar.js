import React from 'react';
import SidebarOption from '../SidebarOption/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="sidebar"/>
            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Yourdfssd Library"/>
            <br />
            <strong className="sidebar__title">Playlists</strong>
            <hr />
            <SidebarOption title="Rap" />
            <SidebarOption title="Country" />
            <SidebarOption title="Jazz" />
        </div>
    )
}

export default Sidebar
