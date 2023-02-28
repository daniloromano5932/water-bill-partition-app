import React from "react";


function Totali(props) {



  return <div className="totali">
    <p>CALCOLO TOTALI</p>
    <table>
      <thead>
        <th>Importo TAU</th>
        {/* <th>Importo TBU</th>
        <th>Importo ECC 1</th>
        <th>Importo ECC 1</th>
        <th>Importo ECC 1</th> */}
        <th>Importo Dep/Fog</th>
        {/* <th>Importo Servizi</th> */}
        <th>Quota Fissa</th>
        <th>Totale Parziale</th>
        <th>IVA</th>
        <th>Quadratura bolletta</th>
        {/* <th>Lettura/ripartizione</th>
        <th>Spese</th> */}
        <th>TOTALE</th>
      </thead>
      <tbody>
        <tr>
          <td>{props.importoTau1.toFixed(2)}</td>
          {/* <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td> */}
          <td>{props.importoFog1.toFixed(2)}</td>
          {/* <td>0.00</td> */}
          <td>{props.importoQuotaFissa.toFixed(2)}</td>
          <td>{props.totaleParziale.toFixed(2)}</td>
          <td>{props.iva1.toFixed(2)}</td>
          <td>{props.singleQuadratura.toFixed(2)}</td>
          {/* <td></td>
          <td></td> */}
          <td>{props.totInt1.toFixed(2)}</td>
        </tr>
        <tr>
          <td>{props.importoTau2.toFixed(2)}</td>
          {/* <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td> */}
          <td>{props.importoFog2.toFixed(2)}</td>
          {/* <td>0.00</td> */}
          <td>{props.importoQuotaFissa.toFixed(2)}</td>
          <td>{props.totaleParziale2.toFixed(2)}</td>
          <td>{props.iva2.toFixed(2)}</td>
          <td>{props.singleQuadratura.toFixed(2)}</td>
          {/* <td></td>
          <td></td> */}
          <td>{props.totInt2.toFixed(2)}</td>
        </tr>
        <tr>
          <td>{props.importoTau3.toFixed(2)}</td>
          {/* <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td> */}
          <td>{props.importoFog3.toFixed(2)}</td>
          {/* <td>0.00</td> */}
          <td>{props.importoQuotaFissa.toFixed(2)}</td>
          <td>{props.totaleParziale3.toFixed(2)}</td>
          <td>{props.iva3.toFixed(2)}</td>
          <td>{props.singleQuadratura.toFixed(2)}</td>
          {/* <td></td>
         <td></td> */}
          <td>{props.totInt3.toFixed(2)}</td>
        </tr>
        <tr>
          <td>{props.importoTau4.toFixed(2)}</td>
          {/* <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td> */}
          <td>{props.importoFog4.toFixed(2)}</td>
          {/* <td>0.00</td> */}
          <td>{props.importoQuotaFissa.toFixed(2)}</td>
          <td>{props.totaleParziale4.toFixed(2)}</td>
          <td>{props.iva4.toFixed(2)}</td>
          <td>{props.singleQuadratura.toFixed(2)}</td>
          {/* <td></td>
      <td></td> */}
          <td>{props.totInt4.toFixed(2)}</td>
        </tr>
        <tr>
          <td>{props.importoTau5.toFixed(2)}</td>
          {/* <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td> */}
          <td>{props.importoFog5.toFixed(2)}</td>
          {/* <td>0.00</td> */}
          <td>{props.importoQuotaFissa.toFixed(2)}</td>
          <td>{props.totaleParziale5.toFixed(2)}</td>
          <td>{props.iva5.toFixed(2)}</td>
          <td>{props.singleQuadratura.toFixed(2)}</td>
          {/* <td></td>
          <td></td> */}
          <td>{props.totInt5.toFixed(2)}</td>
        </tr>
        <tr>
          <th>{props.totImpTAU.toFixed(2)}</th>
          <th>{props.totImpFog.toFixed(2)}</th>
          <th>{props.totQF.toFixed(2)}</th>
          <th>{props.totaleTotParz.toFixed(2)}</th>
          <th>{props.totIva.toFixed(2)}</th>
          <th>{props.totQuadratura.toFixed(2)}</th>
          {/* <th></th>
          <th></th> */}
          <th>{props.totInterni.toFixed(2)}</th>
        </tr>
      </tbody>
    </table>
    <button onClick={props.calculateTotali}>Calcola Totale Importi</button>
  </div>
}


export default Totali;

