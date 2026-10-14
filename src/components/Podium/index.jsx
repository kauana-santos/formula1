import "./Podium.css"
export default function Podium() {
  return (
    <section className="containerPodium">
        <div className="podiumCard">
            <div>
                <h2>2</h2>
                <h3>Max Verstappen</h3>
                <h4>Red Bull Racing</h4>

                <span className={`fi fi-nl`}></span>
            </div>
            <div>421</div>
        </div>

        <div className="podiumCard">
            <div>
                <h2>1</h2>
                <h3>Lando Norris</h3>
                <h4>McLaren</h4>

                <span className={`fi fi-gb`}></span>
            </div>
            <div>423</div>
        </div>
        <div className="podiumCard">
            <div>
                <h2>3</h2>
                <h3>Oscar Piastri</h3>
                <h4>McLaren</h4>

                <span className={`fi fi-au`}></span>
            </div>
            <div>410</div>
        </div>
        
    </section>
  )
}
