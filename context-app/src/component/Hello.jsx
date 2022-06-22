import React,{useContext,useEffect} from "react";
import NoteContext from "../context/NoteContext";

function Hello() {
    const a = useContext(NoteContext);

  return (
    <div>
      <p>Data is {a.name} and {a.hobby}</p>
    </div>
  );
}

export default Hello;
