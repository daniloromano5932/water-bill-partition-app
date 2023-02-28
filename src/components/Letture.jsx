import React from "react"
import { Link } from "react-router-dom";



function Letture(props) {



  return <div> <div className="area-inquilino">
  <Link to="/LogInPage"><button>Area Inquilino</button></Link>
</div> <div className="area-amministratore">
        <Link to="/LogInAdmin"><button>Amministratore</button></Link>
      </div><div className="letture-items">
      <p>LETTURA CONTATORI</p>
      <table>
        <thead>
          <th>Interno</th>
          <th>Lettura attuale</th>
          <th>Lettura Precedente</th>
          <th>Consumo</th>
          {/* <th>TAU</th> */}
          {/* <td>TBU</td>
        <td>ECC 1</td>
        <td>ECC 2</td>
        <td>ECC 3</td> */}
          <th>Importo</th>
        </thead>
        <tbody>
          <tr>
            <td>Interno 1</td>
            <td><input type="number" name="interno1" id="int1-att" onChange={props.int1Attuale} size="5" /></td>
            <td><input type="number" id="int1-prec" onChange={props.int1Precedente} size="10" /></td>
            <td id="consumo">{props.consumo + " m³"}</td>
            {/* <td id="TAU">{props.consumo}</td> */}
            {/* <td id="TBU">0</td>
            <td id="ecc1">0</td>
            <td id="ecc2">0</td>
             <td id="ecc3">0</td>  */}
            <td>{"€ " + props.totInt1.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Interno 2</td>
            <td><input type="number" name="interno2" id="int2-att" onChange={props.int2Attuale} /></td>
            <td><input type="number" id="int2-prec" onChange={props.int2Precedente} /></td>
            <td id="consumo">{props.consumo2 + " m³"}</td>
            {/* <td id="TAU">{props.consumo2}</td> */}
            {/* <td id="TBU">0</td>
        <td id="ecc1">0</td>
        <td id="ecc2">0</td>
        <td id="ecc3">0</td>  */}
            <td>{"€ " + props.totInt2.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Interno 3</td>
            <td><input type="number" name="interno3" id="int3-att" onChange={props.int3Attuale} /></td>
            <td><input type="number" id="int3-prec" onChange={props.int3Precedente} /></td>
            <td id="consumo">{props.consumo3 + " m³"}</td>
            {/* <td id="TAU">{props.consumo3}</td> */}
            {/* <td id="TBU">0</td>
        <td id="ecc1">0</td>
        <td id="ecc2">0</td>
        <td id="ecc3">0</td>  */}
            <td>{"€ " + props.totInt3.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Interno 4</td>
            <td><input type="number" name="interno4" id="int4-att" onChange={props.int4Attuale} /></td>
            <td><input type="number" id="int4-prec" onChange={props.int4Precedente} /></td>
            <td id="consumo">{props.consumo4 + " m³"}</td>
            {/* <td id="TAU">{props.consumo4}</td> */}
            {/* <td id="TBU">0</td>
        <td id="ecc1">0</td>
        <td id="ecc2">0</td>
        <td id="ecc3">0</td>  */}
            <td>{"€ " + props.totInt4.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Interno 5</td>
            <td><input type="number" name="interno5" id="int5-att" onChange={props.int5Attuale} /></td>
            <td><input type="number" id="int5-prec" onChange={props.int5Precedente} /></td>
            <td id="consumo">{props.consumo5 + " m³"}</td>
            {/* <td id="TAU">{props.consumo5}</td> */}
            {/* <td id="TBU">0</td>
        <td id="ecc1">0</td>
        <td id="ecc2">0</td>
        <td id="ecc3">0</td>  */}
            <td>{"€ " + props.totInt5.toFixed(2)}</td>
          </tr>
          <tr className="totale-consumo">
            <th>Totale Consumi</th>
            <td></td>
            <td></td>
            <td>{props.totaleConsumi}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={props.onClick}>Calcola consumo</button>
     
    </div>
    </div>
}

export default Letture;


//TRY TO PASS A FUNCTION TO THE PARENT COMPONENT!