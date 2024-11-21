import React from "react";
function MiBoton({ texto }) {
  return (
    <button onClick={()=>alert("Bienvenido "+texto)}>Haz Click para un mensaje</button>
  )
}
export default MiBoton