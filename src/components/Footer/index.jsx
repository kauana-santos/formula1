import "./Footer.css";
import logo from "../../assets/logo.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <img src={logo} alt="" />
      </div>

      <hr className="footerLine" />

      <p className="footerCopyright">
        © {new Date().getFullYear()} F1ZONE — Todos os direitos reservados.
      </p>
    </footer>
  );
}