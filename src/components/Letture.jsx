import React from "react"

function Letture() {
  return <div>
    <table>
      <thead>
        <th>Interno</th>
        <th>Lettura attuale</th>
        <th>Lettura Precedente</th>
      </thead>
      <tbody>
      <tr>
        <td>Interno 1</td>
        <td><input type="text" name="interno1" id="int1-att" /></td>
        <td><input type="text" id="int1-prec" /></td>
      </tr>
      <tr>
        <td>Interno 2</td>
        <td><input type="text" name="interno12" id="int2-att" /></td>
        <td><input type="text" id="int1-prec" /></td>
      </tr>
      <tr>
        <td>Interno 3</td>
        <td><input type="text" name="interno3" id="int3-att" /></td>
        <td><input type="text" id="int1-prec" /></td>
      </tr>
      <tr>
        <td>Interno 4</td>
        <td><input type="text" name="interno4" id="int4-att" /></td>
        <td><input type="text" id="int1-prec" /></td>
      </tr>
      <tr>
        <td>Interno 5</td>
        <td><input type="text" name="interno5" id="int5-att" /></td>
        <td><input type="text" id="int1-prec" /></td>
      </tr>
      </tbody>
    </table>
  </div>
}

export default Letture;