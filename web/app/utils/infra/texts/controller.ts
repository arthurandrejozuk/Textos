import { defaultMethod } from "../fetchApi";

export async function enviaDadosTexto(titulo, subtitulo, texto) {
  // const response = await fetch("http://localhost:3000/textos", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ title: titulo, subtitle: subtitulo, text: texto }),
  // });
  // if (!response.ok) {
  //   throw new Error("Erro ao criar um dado");
  // }
  defaultMethod({
    url: "http://localhost:3000/textos",
    method: "POST",
    object: {
      title: titulo,
      subtitle: subtitulo,
      text: texto,
    },
    erro: "Erro ao criar texto",
  });
}

export async function atualizaTextoParcial(id, titulo, subtitulo, texto) {
  // const response = await fetch(`http://localhost:3000/textos/${id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ title: titulo, subtitle: subtitulo, text: texto }),
  // });

  // if (!response.ok) {
  //   throw new Error("Erro ao atualizar os dados");
  // }
  defaultMethod({
    url: `http://localhost:3000/textos/${id}`,
    method: "PATCH",
    object: {
      title: titulo,
      subtitle: subtitulo,
      text: texto,
    },
    erro: "Erro ao atualizar os dados",
  });
}

export async function deletaTexto(id) {
  // const response = await fetch(`http://localhost:3000/textos/${id}`, {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // if (!response.ok) {
  //   throw new Error("Erro ao deletar");
  // }
  defaultMethod({
    url: `http://localhost:3000/textos/${id}`,
    method: "DELETE",
    object: {},
    erro: "Erro ao deletar text",
  });
  window.location.href = "/";
}
