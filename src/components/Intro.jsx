import React from "react";
import { Link} from "react-router-dom";



function Intro() {
  return <div className="intro-items">
    <p>DATI GENERALI</p>
    <form>
      <div className="labels-item">
        <label htmlFor="numero-pratica">Numero Pratica</label>
        <input type="text" />
      </div>
      <div className="labels-item">
        <label htmlFor="indirizzo">Indirizzo</label>
        <input type="text" value="Via Castelbellino 64, 00010 Roma" size="29" disabled />
      </div>
      <div className="labels-item">
        <label htmlFor="periodo">Periodo</label>
        <input type="text" />
      </div>
    </form>
  </div>
  

}

export default Intro;