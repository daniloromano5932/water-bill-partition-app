
import React, { useState } from "react";
import Intro from "./components/Intro";
import Letture from "./components/Letture";
import Quote from "./components/Quote";
import Totali from "./components/Totali";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



function App() {
  const [attuale, setAttuale] = useState(0);
  const [precedente, setPrecedente] = useState(0);
  const [attuale2, setAttuale2] = useState(0);
  const [precedente2, setPrecedente2] = useState(0);
  const [consumo, setConsumo] = useState("");
  const [consumo2, setConsumo2] = useState("");
  const [attuale3, setAttuale3] = useState(0);
  const [precedente3, setPrecedente3] = useState(0);
  const [consumo3, setConsumo3] = useState("");
  const [attuale4, setAttuale4] = useState(0);
  const [precedente4, setPrecedente4] = useState(0);
  const [consumo4, setConsumo4] = useState("");
  const [attuale5, setAttuale5] = useState(0);
  const [precedente5, setPrecedente5] = useState(0);
  const [consumo5, setConsumo5] = useState("");
  const [totaleConsumi, setTotaleConsumi] = useState("");

  function int1Attuale(event) {
    const newValue = event.target.value;
    setAttuale(newValue);
  }

  function int1Precedente(event) {
    const newValue = event.target.value;
    setPrecedente(newValue);
  }

  function int2Attuale(event) {
    const newValue = event.target.value;
    setAttuale2(newValue)
  }

  function int2Precedente(event) {
    const newValue = event.target.value;
    setPrecedente2(newValue);
  }

  function int3Attuale(event) {
    const newValue = event.target.value;
    setAttuale3(newValue);
  }

  function int3Precedente(event) {
    const newValue = event.target.value;
    setPrecedente3(newValue);
  }

  function int4Attuale(event) {
    const newValue = event.target.value;
    setAttuale4(newValue);
  }

  function int4Precedente(event) {
    const newValue = event.target.value;
    setPrecedente4(newValue);
  }

  function int5Attuale(event) {
    const newValue = event.target.value;
    setAttuale5(newValue);
  }

  function int5Precedente(event) {
    const newValue = event.target.value;
    setPrecedente5(newValue);
  }

  //Get Quote's Values

  function getTAU(event) {
    const tauValue = event.target.value;
    setTau(tauValue)
  }

  function getFog(event) {
    const newValue = event.target.value;
    setFog(newValue)
  }

  function getQuotaFissa(event) {
    const newValue = event.target.value;
    setQuotaFissa(newValue);
  }

  function getIva(event) {
    const newValue = Number(event.target.value);
    setValueIva(newValue);
  }

  function getTotaleBolletta(event) {
    const newValue = Number(event.target.value);
    setTotaleBolletta(newValue);
  }

  function handleClick() {
    if (attuale < 0 || attuale2 < 0 || attuale3 < 0 || attuale4 < 0 || attuale5 < 0) {
      alert("La lettura attuale deve essere un numero maggiore di 0!");
    } else if (precedente < 0 || precedente2 < 0 || precedente3 < 0 || precedente4 < 0 || precedente5 < 0) {
      alert("La lettura precedente deve essere un numero maggiore di 0!");
    }
    const cons = (attuale - precedente)
    setConsumo(cons);
    const cons2 = (attuale2 - precedente2)
    setConsumo2(cons2);
    const cons3 = (attuale3 - precedente3)
    setConsumo3(cons3);
    const cons4 = (attuale4 - precedente4)
    setConsumo4(cons4);
    const cons5 = (attuale5 - precedente5)
    setConsumo5(cons5);

    setTotaleConsumi(cons + cons2 + cons3 + cons4 + cons5);

    if (cons < 0 || cons2 < 0 || cons3 < 0 || cons4 < 0 || cons5 < 0) {
      alert("Assicurarsi che la lettura attuale sia maggiore della lettura precedente!");
    }

  }

  //TAU
  const [tau, setTau] = useState(0);
  const [importoTau1, setImportoTau1] = useState(0);
  const [importoTau2, setImportoTau2] = useState(0);
  const [importoTau3, setImportoTau3] = useState(0);
  const [importoTau4, setImportoTau4] = useState(0);
  const [importoTau5, setImportoTau5] = useState(0);
  const [totImpTAU, setTotImpTAU] = useState(0);

  //Depurazione e Fognatura
  const [fog, setFog] = useState(0);
  const [importoFog1, setImportoFog1] = useState(0);
  const [importoFog2, setImportoFog2] = useState(0);
  const [importoFog3, setImportoFog3] = useState(0);
  const [importoFog4, setImportoFog4] = useState(0);
  const [importoFog5, setImportoFog5] = useState(0);
  const [totImpFog, setTotImpFog] = useState(0);

  //Quota Fissa
  const [quotaFissa, setQuotaFissa] = useState(0);
  const [importoQuotaFissa, setImportoQuotaFissa] = useState(0);
  const [totQF, setTotQF] = useState(0);

  //Totale Parziale
  const [totaleParziale, setTotaleParziale] = useState(0);
  const [totaleParziale2, setTotaleParziale2] = useState(0);
  const [totaleParziale3, setTotaleParziale3] = useState(0);
  const [totaleParziale4, setTotaleParziale4] = useState(0);
  const [totaleParziale5, setTotaleParziale5] = useState(0);
  const [totaleTotParz, setTotaleTotParz] = useState(0);

  //IVA
  const [valueIva, setValueIva] = useState(0);
  const [iva1, setIva1] = useState(0);
  const [iva2, setIva2] = useState(0);
  const [iva3, setIva3] = useState(0);
  const [iva4, setIva4] = useState(0);
  const [iva5, setIva5] = useState(0);
  const [totIva, setTotIva] = useState(0);

  //Totale Bolletta
  const [totaleBolletta, setTotaleBolletta] = useState(0);
  const [totInt1, setTotInt1] = useState(0);
  const [totInt2, setTotInt2] = useState(0);
  const [totInt3, setTotInt3] = useState(0);
  const [totInt4, setTotInt4] = useState(0);
  const [totInt5, setTotInt5] = useState(0);
  const [totInterni, setTotInterni] = useState(0);

  //Quadratura
  const [totQuadratura, setTotQuadratura] = useState(0);
  const [singleQuadratura, setSingleQuadratura] = useState(0);

  function calculateTotali() {
    if (tau === "" || tau <= 0) {
      alert("Inserire Tariffa Agevolata Unificata!");
    } else if (fog === "" || fog <= 0) {
      alert("Inserire Depurazione e Fognatura!");
    } else if (quotaFissa === "" || quotaFissa <= 0) {
      alert("Inserire Quota Fissa!");
    } else if (valueIva === "" || valueIva <= 0) {
      alert("Inserire IVA!");
    } else if (totaleBolletta === "" || totaleBolletta <= 0) {
      alert("Inserire Totale Bolletta!");
    }
    else {

      const impT1 = (tau * consumo);
      setImportoTau1(impT1);
      const impT2 = (tau * consumo2);
      setImportoTau2(impT2);
      const impT3 = (tau * consumo3);
      setImportoTau3(impT3);
      const impT4 = (tau * consumo4);
      setImportoTau4(impT4);
      const impT5 = (tau * consumo5);
      setImportoTau5(impT5);

      const impF1 = (fog * consumo);
      setImportoFog1(impF1);
      const impF2 = (fog * consumo2);
      setImportoFog2(impF2);
      const impF3 = (fog * consumo3);
      setImportoFog3(impF3);
      const impF4 = (fog * consumo4);
      setImportoFog4(impF4);
      const impF5 = (fog * consumo5);
      setImportoFog5(impF5);

      const impQF = (quotaFissa / 5)
      setImportoQuotaFissa(impQF);


      const totParz = (impT1 + impF1 + impQF);
      setTotaleParziale(totParz);
      const totParz2 = (impT2 + impF2 + impQF);
      setTotaleParziale2(totParz2);
      const totParz3 = (impT3 + impF3 + impQF);
      setTotaleParziale3(totParz3);
      const totParz4 = (impT4 + impF4 + impQF);
      setTotaleParziale4(totParz4);
      const totParz5 = (impT5 + impF5 + impQF);
      setTotaleParziale5(totParz5);

      const arrIva = (totParz * valueIva) / 100;
      setIva1(arrIva);
      const arrIva2 = (totParz2 * valueIva) / 100;
      setIva2(arrIva2);
      const arrIva3 = (totParz3 * valueIva) / 100;
      setIva3(arrIva3);
      const arrIva4 = (totParz4 * valueIva) / 100;
      setIva4(arrIva4);
      const arrIva5 = (totParz5 * valueIva) / 100;
      setIva5(arrIva5);


      const totParzCompl = (totParz + totParz2 + totParz3 + totParz4 + totParz5);
      setTotaleTotParz(totParzCompl);
      setTotImpTAU(impT1 + impT2 + impT3 + impT4 + impT5);
      setTotImpFog(impF1 + impF2 + impF3 + impF4 + impF5);
      setTotQF(impQF * 5);
      const ivaTotale = (arrIva + arrIva2 + arrIva3 + arrIva4 + arrIva5);
      setTotIva(ivaTotale);

      const totQuad = (totaleBolletta - totParzCompl - ivaTotale);
      setTotQuadratura(totQuad);

      const quadraturaSing = (totQuad / 5);
      setSingleQuadratura(quadraturaSing);

      const tot1 = (totParz + arrIva + quadraturaSing);
      setTotInt1(tot1);
      const tot2 = (totParz2 + arrIva2 + quadraturaSing);
      setTotInt2(tot2);
      const tot3 = (totParz3 + arrIva3 + quadraturaSing);
      setTotInt3(tot3);
      const tot4 = (totParz4 + arrIva4 + quadraturaSing);
      setTotInt4(tot4);
      const tot5 = (totParz5 + arrIva5 + quadraturaSing);
      setTotInt5(tot5);

      const interniTot = (tot1 + tot2 + tot3 + tot4 + tot5);
      setTotInterni(interniTot)

    }
  }

  return (

    <div className="App">
      <h1>Conteggi Acqua</h1>
      <div className="row first-row">
        <Intro />
        <Quote
          getTAU={getTAU}
          getFog={getFog}
          getQuotaFissa={getQuotaFissa}
          getIva={getIva}
          getTotaleBolletta={getTotaleBolletta}
        />
   
      </div>
      <div className="row second-row">
        <Letture
          int1Attuale={int1Attuale}
          int1Precedente={int1Precedente}
          consumo={consumo}
          int2Attuale={int2Attuale}
          int2Precedente={int2Precedente}
          consumo2={consumo2}
          int3Attuale={int3Attuale}
          int3Precedente={int3Precedente}
          consumo3={consumo3}
          int4Attuale={int4Attuale}
          int4Precedente={int4Precedente}
          consumo4={consumo4}
          int5Attuale={int5Attuale}
          int5Precedente={int5Precedente}
          consumo5={consumo5}
          onClick={handleClick}
          totaleConsumi={totaleConsumi}

          totInt1={totInt1}
          totInt2={totInt2}
          totInt3={totInt3}
          totInt4={totInt4}
          totInt5={totInt5}
          
        />
        <Totali
          consumo={consumo}
          consumo2={consumo2}
          consumo3={consumo3}
          consumo4={consumo4}
          consumo5={consumo5}
          importoTau1={importoTau1}
          importoTau2={importoTau2}
          importoTau3={importoTau3}
          importoTau4={importoTau4}
          importoTau5={importoTau5}
          importoFog1={importoFog1}
          importoFog2={importoFog2}
          importoFog3={importoFog3}
          importoFog4={importoFog4}
          importoFog5={importoFog5}
          importoQuotaFissa={importoQuotaFissa}

          calculateTotali={calculateTotali}
          totaleParziale={totaleParziale}
          totaleParziale2={totaleParziale2}
          totaleParziale3={totaleParziale3}
          totaleParziale4={totaleParziale4}
          totaleParziale5={totaleParziale5}

          iva1={iva1}
          iva2={iva2}
          iva3={iva3}
          iva4={iva4}
          iva5={iva5}

          totaleTotParz={totaleTotParz}
          totImpTAU={totImpTAU}
          totImpFog={totImpFog}
          totaleBolletta={totaleBolletta}
          totQF={totQF}
          totIva={totIva}
          totQuadratura={totQuadratura}
          singleQuadratura={singleQuadratura}

          totInt1={totInt1}
          totInt2={totInt2}
          totInt3={totInt3}
          totInt4={totInt4}
          totInt5={totInt5}
          totInterni={totInterni}
        />
       
      </div>
   
    </div>

  );
}

export default App;
