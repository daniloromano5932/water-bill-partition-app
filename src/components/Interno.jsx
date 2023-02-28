import React from "react";
import NavBar from "./NavBar";
import { useParams } from 'react-router-dom';
import DatiPersonali from "../DatiPersonali";

function Interno() {
  const { personId } = useParams();
  const user = DatiPersonali.find(userItem => userItem.id == personId)
  const { greeting, name, surname } = user || {}

  return (
    <div className="interno-1">
      <NavBar />
      <h1>{greeting}</h1>
      <h1>{name + " " + surname} </h1>
    </div>
  )
}
export default Interno;