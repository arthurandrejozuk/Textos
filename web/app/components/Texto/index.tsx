import Box from "@art/default/Box";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import {
  atualizaTextoParcial,
  enviaDadosTexto,
} from "../../utils/texts/functions";
import { usePathname, useRouter } from "next/navigation";

const TextoStyled = styled(Box)`
  display: flex;
  z-index: 1;
  align-items: center;
  width: 100%;
  margin-bottom: 44px;
  .title {
    display: flex;
    gap: 4px;
    input,
    textarea {
      background-color: #f8e0bf;
      padding: 16px;
      font-size: 20px;
      width: 70vw;
    }
    textarea {
      height: 600px;
      resize: none;
    }
    input::placeholder {
      color: #885712;
    }
  }
  button {
    background-color: #b47131;
    color: #f8e0bf;
    padding: 12px;
    font-size: 32px;
    border: none;
    cursor: pointer;
  }
  @media(max-width: 600px){
    .title{
      input, textarea{
        
      }
    }
  }
`;

export default function Texto({
  id,
  titulo,
  subtitulo,
  texto,
  altera,
}: {
  id?: string;
  titulo?: string;
  subtitulo?: string;
  texto?: string;
  altera: boolean;
}) {
  const [title, setTitle] = useState(titulo);
  const [subtitle, setSubtitle] = useState(subtitulo);
  const [text, setText] = useState(texto);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setTitle(titulo);
    setSubtitle(subtitulo);
    setText(texto);
  }, [titulo, subtitulo, texto]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevenir comportamento padrão do submit

    if (altera && id) {
      // Se um ID estiver presente, atualize o texto
      await atualizaTextoParcial(id, title, subtitle, text);
    } else {
      // Se não houver ID, adicione um novo texto
      await enviaDadosTexto(title, subtitle, text);
    }

    window.location.reload();
  };

  return (
    <TextoStyled>
      <form onSubmit={handleSubmit}>
        <Box className="title">
          <input
            placeholder="Título"
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            value={title}
            aria-label="Título"
          />
        </Box>
        <Box className="title">
          <input
            placeholder="Subtítulo"
            onChange={(event) => setSubtitle(event.target.value)}
            type="text"
            value={subtitle}
            aria-label="Subtítulo"
          />
        </Box>
        <Box className="title">
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            aria-label="Texto"
            placeholder="Digite o texto aqui"
          />
        </Box>
        <button type="submit" aria-label="Adicionar ou atualizar texto">
          {altera ? "Alterar" : <FaPlus color="#fddeb6" size={36} />}
        </button>
      </form>
    </TextoStyled>
  );
}
