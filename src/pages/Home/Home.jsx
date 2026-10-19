import Tabela from '../../components/Table'
import Podium from '../../components/Podium'
import Hero from '../../components/Hero'
import Banner from '../../components/Banner'
import BannerImg from "../../assets/banner-home.png"

export default function Home() {
  return (
    <section>
        <Hero/>
        <Banner
        link={"https://www.formula1.com/en/results/2026/team"}
        bannerimg={BannerImg}
        titulo={"Veja o ranking de times de 2026"}
        />
        <Podium/>
        <Tabela/>
    </section>
    
  )
}
