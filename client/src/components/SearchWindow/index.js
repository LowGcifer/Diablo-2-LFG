import React from "react";
import "./searchwindow.css";

function SearchWindow(props) {
  return props.trigger ? (
    <div className="search-popup">
      <div className="search-popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {/* User Name */}
        <p className="input-title" id="your-name-position">
          Your Name*
        </p>
        <input
          type="text"
          className="standard-input-field"
          id="your-name-input"
        ></input>

        {/* User Class */}
        <div className="search-class-input">
          <p
            className="input-title bottom-inputs-titles"
            // id="your-class-position"
          >
            Your Class*
          </p>
          <select
            className="standard-input-field bottom-inputs-titles"
            name="player-class"
            // id="your-class-input"
          >
            <option value="amazon">Amazon</option>
            <option value="assassin">Assassin</option>
            <option value="necromancer">Necromancer</option>
            <option value="berserker">Berserker</option>
            <option value="paladin">Paladin</option>
            <option value="sorceress">Sorceress</option>
            <option value="druid">Druid</option>
          </select>
        </div>

        {/* User Level */}
        <div className="search-level-input">
          <p className="input-title bottom-inputs-titles">Your Level*</p>
          <input
            type="text"
            className="standard-input-field bottom-inputs-titles"
          ></input>
        </div>

        {/* Max Players */}

        <div className="search-max-player-input">
          <p className="input-title">Max Players*</p>
          <select
            name="max-players"
            className="square-box-input"
            // id="max-players-input"
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default SearchWindow;
