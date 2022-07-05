import Header from "../components/Header";
import "../style.css";
import CreateButton from "../components/CreateButton";
import SearchButton from "../components/SearchButton";
import CreateWindow from "../components/CreateWindow";
import SearchWindow from "../components/SearchWindow";
import { useState } from "react";
import App from "../App";

function Home() {
  const [
    createButtonPopup,
    setCreateButtonPopup,
    searchButtonPopup,
    setSearchButtonPopup,
  ] = useState(false);
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

      <SearchButton onClick={() => setSearchButtonPopup(true)}></SearchButton>
      <button
        id="search-button"
        className="main-buttons"
        onClickCapture={() => setSearchButtonPopup(true)}
        // trigger={searchButtonPopup}
        // setTrigger={setSearchButtonPopup}
        onClick={() => console.log("Search Window")}
      >
        Join Group
      </button>
      <SearchWindow
        trigger={searchButtonPopup}
        setTrigger={setSearchButtonPopup}
      ></SearchWindow>
    </div>
  );
}

export default Home;
