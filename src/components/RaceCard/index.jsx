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
                            <div>
                                <span className={`fi fi-${cir.bandeira}`}></span>
                                <h5>{cir.pais}</h5>
                            </div>
                            <p>{cir.circuito}</p>
                        </div>
                    </div>

                    <div className="RacePodium">
                        {cir.podium.map((piloto, index) => (
                            <div className="PodiumCard" key={piloto.piloto}>
                                <span>{index + 1}</span>
                                {piloto.pilotoImg && (
                                    <img src={piloto.pilotoImg} alt={piloto.piloto}/>
                                )}
                                <div>
                                    <h6>{piloto.piloto}</h6>
                                    <span>{piloto.tempoCorrida}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </section>
    )
}
