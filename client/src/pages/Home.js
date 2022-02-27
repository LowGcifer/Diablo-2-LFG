import Header from "../components/Header";
import "../style.css";
import CreateButton from "../components/CreateButton";
import SearchButton from "../components/SearchButton";
import CreateWindow from "../components/CreateWindow";

const Home = () => {
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
      <CreateButton></CreateButton>
      <SearchButton></SearchButton>
    </div>
  );
};

export default Home;
