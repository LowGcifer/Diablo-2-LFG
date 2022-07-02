import Header from "../components/Header";
import "../style.css";
import CreateButton from "../components/CreateButton";
import SearchButton from "../components/SearchButton";
import CreateWindow from "../components/CreateWindow";
import { useState } from "react";
import App from "../App";

function Home() {
  const [createButtonPopup, setCreateButtonPopup] = useState(false);
  return (
    <div>
      <Header></Header>
      <h1>
        Welcome To Diablo 2: <br />
        ResurrecTed LFG!
      </h1>
      <p id="intro">
        Create your own group with your own parameters, or search for one that
        fits your criteria!
      </p>
      <CreateButton onClick={() => setCreateButtonPopup(true)}></CreateButton>
      <button
        id="create-button"
        className="main-buttons"
        onClickCapture={() => setCreateButtonPopup(true)}
        // trigger={createButtonPopup}
        // setTrigger={setCreateButtonPopup}
        onClick={() => console.log("Create Window")}
      >
        CreaTe Group
      </button>
      <CreateWindow
        trigger={createButtonPopup}
        setTrigger={setCreateButtonPopup}
      ></CreateWindow>

      <button id="search-button" className="main-buttons">
        Join Group
      </button>
    </div>
  );
}

export default Home;
