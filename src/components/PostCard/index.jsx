import "./PostCard.css";

export default function PostCard({ post, onDelete }) {
  return (
    <section className="postCard">
      <div className="postCardHeader">
        <div className="postCardInfo">
          <span className="postCardAutor">{post.autor}</span>
        </div>

        <button
          className="postCardExcluir"
          type="button"
          onClick={() => onDelete(post.id)}
        >
          Excluir
        </button>
      </div>

      <div className="postCardBody">
        <h3 className="postCardTitulo">{post.titulo}</h3>
        <p className="postCardConteudo">{post.conteudo}</p>
      </div>
    </section>
  );
}