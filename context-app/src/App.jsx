import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./component/Hello";
import NoteState from "./context/noteState";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Hello></Hello>
      </NoteState>
    </div>
  );
}

export default App;
