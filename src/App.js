import logo from './logo.svg';
import './App.css';
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextRepeaterButton";
import { useState } from "react";


function App() {

  //const [light, setLight] = useState('off');
 // const dark = (light === "off") ? 'dark' : '';
 // const switchLight = () => setLight((light === "on") ? "off" : "on");

  
  return (
    <div className="App">
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
