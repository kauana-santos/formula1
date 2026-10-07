import { useEffect, useState } from "react"
import "./Tabela.css"

export default function Tabela() {
    const [piloto, setPiloto] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/pilotos")
                .then((response) => response.json())
                .then((data) => setPiloto(data))
                .catch((error) => console.log(error))
    })
  return (
    <div className="containerTable">
        <table className="table">
            <thead>
                <tr>
                    <th>Pos.</th>
                    <th>Piloto</th>
                    <th>Nacionalidade</th>
                    <th>Equipe</th>
                    <th>Pontos</th>
                </tr>
            </thead>
            <tbody>
                {piloto.map((p) => (
                    <tr>
                        <td className="positionNumber">{p.posicao}</td>
                        <td className="pilotContainer">
                            <img src={p.pilotoImage} alt="piloto-foto" />
                            <h4>{p.piloto}</h4>
                        </td>
                        <td>{p.nacionalidade}</td>
                        <td>{p.time}</td>
                        <td>{p.pontos}</td>
                    </tr>
                ))}
        </tbody>
        </table>
    </div>
  )
}
