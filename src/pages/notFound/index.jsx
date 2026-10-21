import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="notFound">
      <div className="notFoundContent">
        <h1>404</h1>

        <h2>Bandeira vermelha!</h2>

        <p>
          Parece que você saiu da pista.
          Essa página não foi encontrada.
        </p>

        <a href="/">Voltar para o início</a>
      </div>
    </main>
  );
}