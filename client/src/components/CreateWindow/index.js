import React from "react";
import "../../style.css";

function CreateWindow() {
  return (
    <div id="create-window">
      <form id="create-name">
        {" "}
        Your Name*{" "}
        <br>
          {" "}
          <input class="your-name" type="text" name="playername"></input>
        </br>{" "}
      </form>
      <form id="create-title">
        {" "}
        Group TiTle*{" "}
        <br>
          <input class="group-title" type="text" name="groupname"></input>
        </br>
      </form>
      <label for="player-class">Your Class*</label>{" "}
      <br>
        <select name="player-class" id="player-classes">
          <option value="amazon">Amazon</option>
          <option value="assassin">Assassin</option>
          <option value="necromancer">Necromancer</option>
          <option value="berserker">Berserker</option>
          <option value="paladin">Paladin</option>
          <option value="sorceress">Sorceress</option>
          <option value="druid">Druid</option>
        </select>
      </br>
    </div>
  );
}

export default CreateWindow;
