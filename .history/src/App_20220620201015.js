import logo from './logo.svg';
import './App.css';
import React from "react";
import Submit from './submit';
import ArtDebug from './ArtDebug';
import Header from './ArtDebug';
import Art from './Art';

function App() {
  return (
    <div className="App">
      {/* process.env */}
      <Submit />
      {/* <ArtDebug /> */}
    </div>
  );
}

export default App;
