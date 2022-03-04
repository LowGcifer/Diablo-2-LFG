import React from "react";
import "../../style.css";

function CreateWindow(props) {
  return props.trigger ? (
    <div id="create-window">
      {/* Creator Name */}
      <form id="create-name" class="create-header">
        {" "}
        Your Name*{" "}
        <br>
          {" "}
          <input class="your-name" type="text" name="playername"></input>
        </br>{" "}
      </form>

      {/* Group Title */}
      <form id="create-title" class="create-header">
        {" "}
        Group TiTle*{" "}
        <br>
          <input class="group-title" type="text" name="groupname"></input>
        </br>
      </form>

      {/* Creator Class */}
      <form id="player-class" class="create-header">
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

      {/* Group Difficulty */}
      <form id="create-difficulty" class="create-header">
        <label for="group-difficulty">DifficulTy*</label>
        <br>
          <select name="group-difficulty" id="group-difficulties">
            <option value="normal">Normal</option>
            <option value="nightmare">Nightmare</option>
            <option value="hell">Hell</option>
          </select>
        </br>
      </form>

      {/* Creator Level */}
      <form id="creator-level" class="create-header">
        Your Level*
        <br>
          <input class="your-level" type="text" name="creatorlevel"></input>
        </br>
      </form>

      {/* Group Activity */}
      <form id="group-activity" class="create-header">
        AcTiviTy
        <br>
          <input class="activity" type="text" name="groupactivity"></input>
        </br>
      </form>

      {/* Group Description */}
      <form id="group-description" class="create-header">
        DescripTion
        <br>
          <input
            class="description"
            type="text"
            name="groupdescription"
          ></input>
        </br>
      </form>

      {/* Group Platform */}
      <form id="your-platform" class="create-header">
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

      {/* Create Group */}
      <button id="create-group-button">CreaTe</button>
    </div>
  ) : (
    ""
  );
}

export default CreateWindow;
