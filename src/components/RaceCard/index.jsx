import "./Corridas.css"

export default function RaceCard() {
  return (
    <div className='RaceCardContainer'>
        <div className="cardContent">
            <div className="cardHeader">
                <h5>Round 1</h5>
                <h5>06 - 08 mar</h5>
            </div>
             <div className="cardMain">
                <h5>Bahrain</h5>
                <p>FORMULA 1 ARAMCO PRE-SEASON TESTING 2 2026</p>
            </div>
        </div>
        
        <div className="cardFooter">
            <h6>18 - 20 feb</h6>
        </div>
    </div>
  )
}
