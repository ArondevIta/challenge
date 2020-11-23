import React, { useEffect, useState } from "react";
import api from "../../services/api";

import "./style.css";

function Musics() {
  const [musics, setMusics] = useState([]);

  async function loadMusics() {
    const response = await api.get("musics");
    setMusics(response.data);
  }

  useEffect(() => {
    loadMusics();
  }, []);

  return (
    <div className="track">
      <div>
        {musics.map((music) => (
          <div key={music.id}>
            <small className="music-name">{music.name}</small>
            <audio
              controls
              style={{ width: "100%" }}
              preload="metadata"
              type="audio/ogg"
            >
              <source src={music.music} />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Musics;
