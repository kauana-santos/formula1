
import Banner from '../../components/Banner'
import RaceCard from '../../components/RaceCard'
import banner from "../../assets/banner-circuitos.png"
import Division from "../../components/Division"

export default function Corridas() {
  return (
    <section className='containerPrincipal'>
      <Banner link={`https://www.formula1.com/en/racing/2026`} bannerimg={banner} titulo={"Acompanhe o calendário atual!"}/>
        <main>
          <Division/>
            <RaceCard/>
        </main>
    </section>
  )
}
