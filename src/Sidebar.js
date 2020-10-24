import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      />
      <div className="sidebar__icon">
        <SidebarOption Icon={HomeIcon} option="Home" />
      </div>
      <div className="sidebar__icon">
        <SidebarOption Icon={SearchIcon} option="Search" />
      </div>
      <div className="sidebar__icon">
        <SidebarOption Icon={LibraryMusicIcon} option="Your library" />
      </div>
      <br />
      <strong className="sidebar__title"> PLAYLISTS </strong>

      <div className="playlist__div">
        <div className="playlist__section">
          <AddBoxIcon />
          <h5> Create Playlist </h5>
        </div>
        <div className="playlist__section">
          <FavoriteIcon />
          <h5> Liked Songs </h5>
        </div>
      </div>

      <hr className="hr" />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
