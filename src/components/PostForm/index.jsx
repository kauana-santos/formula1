import "./PostForm.css";

export default function PostForm({ onPostCreated }) {
  async function handleSubmit(e) {
    e.preventDefault();

    const formulario = e.target;

    const novoPost = {
      autor: formulario.autor.value,
      titulo: formulario.titulo.value,
      conteudo: formulario.conteudo.value,
    };

    const resposta = await fetch("https://formula1-q2mo.onrender.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoPost),
    });

    if (resposta.ok) {
      const postCriado = await resposta.json();

      onPostCreated(postCriado);
      formulario.reset();
    }
  }

  return (
    <div className="postFormContainer">
      <h2>Novo post</h2>

      <form className="postForm" onSubmit={handleSubmit}>
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