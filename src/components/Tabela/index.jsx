import "./Tabela.css"

export default function Tabela() {
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
            <tr>
                <td className="positionNumber">1</td>
                <td className="pilotContainer">
                    <img src="" alt="piloto-foto" />
                    <h4>Kimi Antonelli</h4>
                </td>
                <td>Italia</td>
                <td>Mercedes</td>
                <td>320</td>
            </tr>

            <tr>
                <td className="positionNumber">2</td>
                <td>George Russell</td>
                <td>Reino Unido</td>
                <td>Mercedes</td>
                <td>236</td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}
