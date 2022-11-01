import React from "react";



function Intro() {
return <div className="intro-items">
  <div className="labels">
    <div className="labels-item">
    <label htmlFor="numero-pratica">Numero Pratica</label>
    </div>
    <div className="labels-item">
    <label htmlFor="indirizzo">Indirizzo</label>
    </div>
  <div className="labels-item">
    <label htmlFor="periodo">Periodo</label>
    </div>
    </div>
<div className="inputs">
<div className="inputs-item">
<input type="text" />
</div>
<div className="inputs-item">
<input type="text" />
</div>
<div className="inputs-item">
<input type="text" />
</div>
</div>
</div>
}

export default Intro;