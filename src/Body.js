import React from "react";
import Albums from "./Album";
import "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div>
        <h2> Recently Played </h2>
        <div className="body__info">
          <Albums
            image="https://upload.wikimedia.org/wikipedia/en/d/da/Alan_Walker_-_Faded.png"
            title="Faded"
            artist="Alan Walker"
          />
          <Albums
            image="https://upload.wikimedia.org/wikipedia/en/6/66/In_the_Name_of_Love_Cover_Art_by_Bebe_Rexha_and_Martin_Garrix.jpeg"
            title="In the name of love"
            artist="Martin Garrix and Bebe Rexha"
          />
          <Albums
            image="https://upload.wikimedia.org/wikipedia/en/3/35/Scared_to_Be_Lonely.jpg"
            title="Scared to be lonely"
            artist="Dua Lipa and Martin Garrix"
          />
          <Albums
            image="https://upload.wikimedia.org/wikipedia/en/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png"
            title="Closer"
            artist="The Chainsmokers and Halsey"
          />
          <Albums
            image="https://cdns-images.dzcdn.net/images/cover/3dfc8c9e406cf1bba8ce0695a44a9b7e/500x500.jpg"
            title="Heathens"
            artist="Twenty One Pilots"
          />
        </div>
      </div>

      <div className="madeforyou__section">
        <h2> Made for you </h2>
        <div className="body__info">
          <Albums
            image="https://upload.wikimedia.org/wikipedia/en/d/da/Alan_Walker_-_Faded.png"
            title="Faded"
            artist="Alan Walker"
          />
          <Albums
            image="https://upload.wikimedia.org/wikipedia/en/6/66/In_the_Name_of_Love_Cover_Art_by_Bebe_Rexha_and_Martin_Garrix.jpeg"
            title="In the name of love"
            artist="Martin Garrix and Bebe Rexha"
          />
          <Albums
            image="https://upload.wikimedia.org/wikipedia/en/3/35/Scared_to_Be_Lonely.jpg"
            title="Scared to be lonely"
            artist="Dua Lipa and Martin Garrix"
          />
          <Albums
            image="https://upload.wikimedia.org/wikipedia/en/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png"
            title="Closer"
            artist="The Chainsmokers and Halsey"
          />
          <Albums
            image="https://cdns-images.dzcdn.net/images/cover/3dfc8c9e406cf1bba8ce0695a44a9b7e/500x500.jpg"
            title="Heathens"
            artist="Twenty One Pilots"
          />
        </div>
      </div>

      <div className="madeforyou__section">
        <h2> Popular Playlists </h2>
        <div className="body__info">
          <Albums
            image="https://upload.wikimedia.org/wikipedia/en/d/da/Alan_Walker_-_Faded.png"
            title="Faded"
            artist="Alan Walker"
          />
          <Albums
            image="https://upload.wikimedia.org/wikipedia/en/6/66/In_the_Name_of_Love_Cover_Art_by_Bebe_Rexha_and_Martin_Garrix.jpeg"
            title="In the name of love"
            artist="Martin Garrix and Bebe Rexha"
          />
          <Albums
            image="https://upload.wikimedia.org/wikipedia/en/3/35/Scared_to_Be_Lonely.jpg"
            title="Scared to be lonely"
            artist="Dua Lipa and Martin Garrix"
          />
          <Albums
            image="https://upload.wikimedia.org/wikipedia/en/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png"
            title="Closer"
            artist="The Chainsmokers and Halsey"
          />
          <Albums
            image="https://cdns-images.dzcdn.net/images/cover/3dfc8c9e406cf1bba8ce0695a44a9b7e/500x500.jpg"
            title="Heathens"
            artist="Twenty One Pilots"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
