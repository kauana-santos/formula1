import "./PostCard.css";

export default function PostCard({autor, tituloPost, textoPost}) {
  return (
    <section className="postCard">
      <div className="postCardHeader">
        <div className="postCardInfo">
          <span className="postCardAutor">{autor}</span>
          <span className="postCardData">19/10/2026</span>
        </div>

        <button className="postCardExcluir" type="button">
          Excluir
        </button>
      </div>

      <div className="postCardBody">
        <h3 className="postCardTitulo">{tituloPost}</h3>

        <p className="postCardConteudo">
          {textoPost}
        </p>
      </div>
    </section>
  );
}
