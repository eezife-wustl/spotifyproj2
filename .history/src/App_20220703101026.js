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
      <Header />
      {/* process.env */}
      <p></p>
      <Submit />
      
    </div>
  );
}

export default App;