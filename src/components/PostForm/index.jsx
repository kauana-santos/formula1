import "./PostForm.css";

export default function PostForm() {
  return (
    <div className="postFormContainer">
      <h2>Novo post</h2>

      <form className="postForm">
        <div className="postFormGroup">
          <label htmlFor="autor">Autor</label>
          <input
            type="text"
            id="autor"
            name="autor"
            placeholder="Digite o nome do autor"
            required
          />
        </div>

        <div className="postFormGroup">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            placeholder="Digite o título do post"
            required
          />
        </div>

        <div className="postFormGroup">
          <label htmlFor="conteudo">Conteúdo do post</label>
          <textarea
            id="conteudo"
            name="conteudo"
            placeholder="Escreva seu post..."
            rows="5"
            required
            
          />
        </div>

        <button className="postFormButton" type="submit">
          Postar
        </button>
      </form>
    </div>
  );
}