import "./Hero.css";
import video from "../../assets/video/hero-f1-otimizado.mp4"

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="heroVideo"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src={video}
          type="video/mp4"
        />
        Seu navegador não suporta vídeos.
      </video>

      <div className="heroBlur"></div>

      <div className="heroContent">
        <span className="heroSubtitle">
          FORMULA 1 • TEMPORADA 2025
        </span>

        <p>
          Acompanhe os pilotos, conheça as equipes e circuitos da temporada de 2025.
        </p>

      
      </div>

      <div className="heroBottom">
        <span>RACE</span>
        <span>SPEED</span>
        <span>PRECISION</span>
      </div>
    </section>
  );
}