import { useEffect, useState } from "react";
import PostForm from "../../components/PostForm";
import PostCard from "../../components/PostCard";

const API_URL = "http://localhost:3000/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function buscarPosts() {
      const resposta = await fetch(API_URL);
      const dados = await resposta.json();

      setPosts(dados);
    }

    buscarPosts();
  }, []);

  function adicionarPost(novoPost) {
    setPosts((postsAtuais) => [novoPost, ...postsAtuais]);
  }

  async function excluirPost(id) {
    const resposta = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (resposta.ok) {
      setPosts((postsAtuais) =>
        postsAtuais.filter((post) => post.id !== id)
      );
    }
  }

  return (
    <main>
      <PostForm onPostCreated={adicionarPost} />

      <section className="postsContainer">
        <h2>Publicações</h2>

        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onDelete={excluirPost}
          />
        ))}
      </section>
    </main>
  );
}
