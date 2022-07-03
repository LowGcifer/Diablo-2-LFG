import React from "react";
import "./popup.css";

function CreateWindow(props) {
  return props.trigger ? (
    <div className="create-popup">
      <div className="create-popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {/* User Name */}
        <p className="input-title">Your Name*</p>
        <input type="text" className="standard-input-field"></input>

        {/* Group Title */}
        <p className="input-title right-title" id="group-title-position">
          Group TiTle*
        </p>
        <input type="text" className="standard-input-field right-title"></input>

        {/* User Class */}
        <p className="input-title bottom-inputs-titles">Your Class*</p>
        <select
          className="standard-input-field bottom-inputs-titles"
          name="player-class"
          id="player-classes"
        >
          <option value="amazon">Amazon</option>
          <option value="assassin">Assassin</option>
          <option value="necromancer">Necromancer</option>
          <option value="berserker">Berserker</option>
          <option value="paladin">Paladin</option>
          <option value="sorceress">Sorceress</option>
          <option value="druid">Druid</option>
        </select>

        {/* Difficulty */}
        <p
          className="input-title right-title bottom-inputs-titles"
          id="difficulty-position"
        >
          DifficulTy*
        </p>
        <select
          name="group-difficulty"
          id="difficulty-position"
          className="right-title standard-input-field bottom-inputs-titles"
        >
          <option value="normal">Normal</option>
          <option value="nightmare">Nightmare</option>
          <option value="hell">Hell</option>
        </select>

        {/* User Level */}
        <p className="input-title bottom-inputs-titles" id="level-position">
          Your Level*
        </p>
        <input
          type="text"
          className="standard-input-field bottom-inputs-titles"
          id="level-position"
        ></input>

        {/* Activity */}
        <p
          className="input-title right-title bottom-inputs-titles"
          id="activity-position"
        >
          AcTiviTy
        </p>
        <input
          type="text"
          className="standard-input-field right-title bottom-inputs-titles"
          id="activity-position"
        ></input>

        {/* Group Description */}
        <p className="input-title">DescripTion</p>
        <input type="text"></input>

        {/* Group Platform */}
        <p className="input-title">PlaTform</p>
        <select name="group-platform" id="group-platform">
          <option value="PC">PC</option>
          <option value="PlayStation">PlayStation</option>
          <option value="Xbox">Xbox</option>
          <option value="Switch">Switch</option>
        </select>

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

// function CreateWindow(props) {
//   return props.trigger ? (
//     <div id="create-window">
//       <div id="create-window-inner">
//         {/* Creator Name */}
//         <form id="create-name" class="create-header">
//           {" "}
//           Your Name*{" "}
//           <br>
//             {" "}
//             <input class="your-name" type="text" name="playername"></input>
//           </br>{" "}
//         </form>

//         {/* Group Title */}
//         <form id="create-title" class="create-header">
//           {" "}
//           Group TiTle*{" "}
//           <br>
//             <input class="group-title" type="text" name="groupname"></input>
//           </br>
//         </form>

//         {/* Creator Class */}
//         <form id="player-class" class="create-header">
//           <label for="player-class">Your Class*</label>{" "}
//           <br>
//             <select name="player-class" id="player-classes">
//               <option value="amazon">Amazon</option>
//               <option value="assassin">Assassin</option>
//               <option value="necromancer">Necromancer</option>
//               <option value="berserker">Berserker</option>
//               <option value="paladin">Paladin</option>
//               <option value="sorceress">Sorceress</option>
//               <option value="druid">Druid</option>
//             </select>
//           </br>
//         </form>

//         {/* Group Difficulty */}
//         <form id="create-difficulty" class="create-header">
//           <label for="group-difficulty">DifficulTy*</label>
//           <br>
//             <select name="group-difficulty" id="group-difficulties">
//               <option value="normal">Normal</option>
//               <option value="nightmare">Nightmare</option>
//               <option value="hell">Hell</option>
//             </select>
//           </br>
//         </form>

//         {/* Creator Level */}
//         <form id="creator-level" class="create-header">
//           Your Level*
//           <br>
//             <input class="your-level" type="text" name="creatorlevel"></input>
//           </br>
//         </form>

//         {/* Group Activity */}
//         <form id="group-activity" class="create-header">
//           AcTiviTy
//           <br>
//             <input class="activity" type="text" name="groupactivity"></input>
//           </br>
//         </form>

//         {/* Group Description */}
//         <form id="group-description" class="create-header">
//           DescripTion
//           <br>
//             <input
//               class="description"
//               type="text"
//               name="groupdescription"
//             ></input>
//           </br>
//         </form>

//         {/* Group Platform */}
//         <form id="your-platform" class="create-header">
//           <label for="group-platform">PlaTform</label>
//           <br>
//             <select name="group-platform" id="group-platform">
//               <option value="PC">PC</option>
//               <option value="PlayStation">PlayStation</option>
//               <option value="Xbox">Xbox</option>
//               <option value="Switch">Switch</option>
//             </select>
//           </br>
//         </form>

//         {/* Create Group */}
//         <button id="create-group-button">CreaTe</button>
//         {props.children}
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// }

export default CreateWindow;
