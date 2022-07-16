import logo from './logo.svg';
import './App.css';
import React from "react";
import Submit from './submit';
import ArtDebug from './ArtDebug';
import Header from './header';
import Art from './Art';
import './style.css';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <Header />
      {/* process.env */}
      <div style={{ padding: "1rem" }}></div>
      <Submit />
      
    </div>
  );
}

export default App;
