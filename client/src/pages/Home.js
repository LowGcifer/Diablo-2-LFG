import Header from "../components/Header";
import "../style.css";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h1>
        Welcome to Diablo 2: <br />
        Resurrected LFG!
      </h1>
      <p id="intro">
        Create your own group with your own parameters, or search for one that
        fits your criteria!
      </p>
    </div>
  );
};

export default Home;
