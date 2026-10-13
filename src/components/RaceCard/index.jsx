import { useEffect, useState } from "react"
import "./Corridas.css"

export default function RaceCard() {
    const [circuito, setCircuito] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/circuitos")
        .then((res) => res.json())
        .then((data) => setCircuito(data))
        .catch((error) => console.log(error))
    })

  return (
    <section className="sectionRaceCard">
        {circuito.map((cir) => (
            <div className='RaceCardContainer'>
            <div className="cardContent">
                <div className="cardHeader">
                    <h5>Round {cir.etapa}</h5>
                    <h5>06 - 08 mar</h5>
                </div>
                 <div className="cardMain">
                    <h5>{cir.pais}</h5>
                    <p>{cir.circuito}</p>
                </div>
            </div>
        
            <div className="cardFooter">
                <h6>18 - 20 feb</h6>
            </div>
        </div>
        ))}
        
    </section>
  )
}
