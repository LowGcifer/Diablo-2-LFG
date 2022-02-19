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
      <form id="player-class">
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
      </form>

      <form id="create-difficulty">
        <label for="group-difficulty">DifficulTy*</label>
        <br>
          <select name="group-difficulty" id="group-difficulties">
            <option value="normal">Normal</option>
            <option value="nightmare">Nightmare</option>
            <option value="hell">Hell</option>
          </select>
        </br>
      </form>

      <form id="creator-level">
        Your Level*
        <br>
          <input class="your-level" type="text" name="creatorlevel"></input>
        </br>
      </form>

      <form id="group-activity">
        AcTiviTy
        <br>
          <input class="activity" type="text" name="groupactivity"></input>
        </br>
      </form>

      <form id="group-description">
        DescripTion
        <br>
          <input
            class="description"
            type="text"
            name="groupdescription"
          ></input>
        </br>
      </form>

      <form id="your-platform">
        <label for="group-platform">PlaTform</label>
        <br>
          <select name="group-platform" id="group-platform">
            <option value="PC">PC</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Xbox">Xbox</option>
            <option value="Switch">Switch</option>
          </select>
        </br>
      </form>

      <button id="create-group-button">CreaTe</button>
    </div>
  );
}

export default CreateWindow;
