
import "./Hero.css";
import video from "../../assets/video/hero-f1-otimizado.mp4";

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="heroVideo"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={video} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="heroBlur"></div>

      <div className="heroContent">
        <h1 className="heroTitle">
          FORMULA <span>1</span>
          <strong>O ESPORTE DA VELOCIDADE</strong>
        </h1>

        <p>
          Acompanhe os pilotos, conheça as equipes e
          descubra os circuitos da temporada de 2025.
        </p>
      </div>

      <div className="heroBottom">
        <span>CORRIDA</span>
        <span>VELOCIDADE</span>
        <span>PRECISÃO</span>
      </div>
    </section>
  );
}
