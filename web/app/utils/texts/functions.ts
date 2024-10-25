export async function enviaDadosTexto(titulo, subtitulo, texto) {
    const response = await fetch("http://localhost:3000/textos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: titulo, subtitle: subtitulo, text: texto })
    });
    const data = await response.json();
    console.log(data); // O novo objeto inserido
}

export async function atualizaTextoParcial(id, titulo, subtitulo, texto) {
    const response = await fetch(`http://localhost:3000/textos/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title: titulo, subtitle: subtitulo, text: texto}) 
    });

    console.log(id)

    if (!response.ok) {
        throw new Error("Erro ao atualizar os dados");
    }

    const data = await response.json();
    console.log(data); // O objeto atualizado
}