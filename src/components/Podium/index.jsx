import "./Podium.css"
export default function Podium() {
  return (
    <section className="containerPodium">
        <div className="podiumCard">
            <div>
                <h2>2 <span className="podium-sufixo">nd</span></h2>
                <h3>Max Verstappen</h3>
                <h4>Red Bull Racing</h4>

                <span className={`fi fi-nl`}></span>
            </div>
            <div>421<span className="podium-sufixo">pts</span></div>
        </div>

        <div className="podiumCard">
            <div>
                <h2>1<span className="podium-sufixo">st</span></h2>
                <h3>Lando Norris</h3>
                <h4>McLaren</h4>

                <span className={`fi fi-gb`}></span>
            </div>
            <div>423<span className="podium-sufixo">pts</span></div>
        </div>
        <div className="podiumCard">
            <div>
                <h2>3<span className="podium-sufixo">rd</span></h2>
                <h3>Oscar Piastri</h3>
                <h4>McLaren</h4>

                <span className={`fi fi-au`}></span>
            </div>
            <div>410<span className="podium-sufixo">pts</span></div>
        </div>
        
    </section>
  )
}
