import React from "react"

function Quote(props) {

  return <div className="quote-items">
    <p>QUOTE BOLLETTA ACEA</p>

    <form>
      <div className="labels-item">
        <label htmlFor="TAU">Tariffa Agevolata Unificata<sup className="required">*</sup></label>
        <input className="input-TAU" type="number" onChange={props.getTAU} placeholder="0.4493" required />

      </div>
      <div className="labels-item">
        <label htmlFor="indirizzo">Tariffa Base Unificata</label>
        <input className="input-TBU" type="number" placeholder="0.8984" />
      </div>
      <div className="labels-item">
        <label htmlFor="periodo">Depurazione e fognatura<sup className="required">*</sup></label>
        <input className="input-Fog" type="number" onChange={props.getFog} placeholder="1.0052" required />
      </div>
    </form>

    <form>
      <div className="labels-item">
        <label htmlFor="I-quota-fissa">Quota Fissa<sup className="required">*</sup></label>
        <input type="number" onChange={props.getQuotaFissa} placeholder="39.76" required />
      </div>
      <div className="labels-item">
        <label htmlFor="IVA">IVA<sup className="required">*</sup></label>
        <input type="number" placeholder="10%" onChange={props.getIva} required />
      </div>
      <div className="labels-item">
        <label htmlFor="totale-bolletta">Totale Bolletta<sup className="required">*</sup></label>
        <input type="number" onChange={props.getTotaleBolletta} required />
      </div>
    </form>



    {/* ECCEDENZE */}
    {/* <div className="labels">
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
    </div> */}
  </div>


}


export default Quote;