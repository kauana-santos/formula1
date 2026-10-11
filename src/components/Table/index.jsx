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
                    <tr key={p.id}>
                        <td className="positionNumber">{p.posicao}</td>
                        <td className="pilotContainer">
                            <img src={p.foto} alt="piloto-foto" />
                            <h4>{p.nome}</h4>
                        </td>
                        <td>
                            <span className={`fi fi-${p.bandeira}`}></span>
                            <span className="nacionalidade">{p.nacionalidade}</span>
                        </td>
                        <td>{p.equipe}</td>
                        <td>{p.pontos}</td>
                    </tr>
                ))}
        </tbody>
        </table>
    </div>
  )
}
