
import Banner from '../../components/Banner'
import RaceCard from '../../components/RaceCard'
import banner from "../../assets/banner-circuitos.png"

export default function Corridas() {
  return (
    <section>
      <Banner link={`https://www.formula1.com/en/racing/2026`} bannerimg={banner} titulo={"Acompanhe a temporada atual"}/>
        <main>
            <RaceCard/>
        </main>
    </section>
  )
}
