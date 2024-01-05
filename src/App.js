import logo from "./images/illustration-hero.svg";
import icon from "./images/icon-music.svg";

export default function App() {
  return (
    <div className="App">
      <ImageHero logo={logo} />
      <Summary />
      <Plan />
      <Buttons />
    </div>
  );
}

function ImageHero({ logo }) {
  return <img className="img" src={logo} alt="hero img" />;
}

function Summary() {
  return (
    <div className="summary">
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks, and podcast on any
        device anywhere you like!
      </p>
    </div>
  );
}

function Plan() {
  return (
    <div className="plan-box">
      <div className="plans">
        <img src={icon} alt="icon" />
        <div>
          <h3>Annual Plan</h3>
          <p>$59.99/year</p>
        </div>
      </div>
      <button>Change</button>
    </div>
  );
}

function Buttons() {
  return (
    <div className="btns">
      <button className="pay">Proceed to Payment</button>
      <button className="cancel">Cancel order</button>
    </div>
  );
}
