import React from "react"

function Quote() {
  return <div className="quote-items">
    <div className="labels">
      <div className="labels-item">
        <label htmlFor="TAU">Tariffa Agevolata Unificata</label>
      </div>
      <div className="labels-item">
        <label htmlFor="TBU">Tariffa Base Agevolata</label>
      </div>
      <div className="labels-item">
        <label htmlFor="dep-fog">Depurazione e fognatura</label>
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

    <div className="labels">
      <div className="labels-item">
        <label htmlFor="I-eccedenza">I Eccedenza</label>
      </div>
      <div className="labels-item">
        <label htmlFor="II-eccedenza">II Eccedenza</label>
      </div>
      <div className="labels-item">
        <label htmlFor="III-eccedenza">III Eccedenza</label>
      </div>
    </div>
    <div className="inputs">
      <div className="inputs-item">
        <input type="text" value="1.4976" />
      </div>
      <div className="inputs-item">
        <input type="text" value="2.0967" />
      </div>
      <div className="inputs-item">
        <input type="text" value="2.6958" />
      </div>
    </div>

    <div className="labels">
      <div className="labels-item">
        <label htmlFor="I-quota-fissa">Quota Fissa</label>
      </div>
      <div className="labels-item">
        <label htmlFor="IVA">IVA</label>
      </div>
      <div className="labels-item">
        <label htmlFor="totale-bolletta">Totale Bolletta</label>
      </div>
    </div>
    <div className="inputs">
      <div className="inputs-item">
        <input type="text" />
      </div>
      <div className="inputs-item">
        <input type="text" placeholder="10%" />
      </div>
      <div className="inputs-item">
        <input type="text" />
      </div>
    </div>
  </div>



}


export default Quote;