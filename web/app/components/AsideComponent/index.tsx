import Box from "@art/default/Box";
import Link from "next/link";
import { AiOutlineCaretLeft } from "react-icons/ai";
import Text from "@art/default/Text";
import { IoIosClose } from "react-icons/io";
import { deletaTexto } from "../../utils/infra/texts/controller";
import { IText } from "../../interfaces/ITexto";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { modificaLetras } from "../../utils/functions/updateMaxChars";

const AsideComponentStyled = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 4px;
  padding: 4px;
  background-color: #ad76425a;
  a {
    display: flex;
    align-items: center;
    gap: 4px;

    h3 {
      cursor: pointer;
    }
  }
  .delete__button {
    cursor: pointer;
  }
`;

export default function AsideComponent({ texto }: { texto: IText }) {
  const [maxChars, setMaxChars] = useState(30);

  useEffect(() => {
    modificaLetras(setMaxChars);
  }, []);

  return (
    <AsideComponentStyled key={texto.id} className="title__text">
      <Link href={`/textos/${texto.id}`}>
        <AiOutlineCaretLeft size={20} />
        <Text tag="h3">
          {texto.title.length > maxChars
            ? texto.title.slice(0, maxChars) + "..."
            : texto.title}
        </Text>
      </Link>
      <IoIosClose
        onClick={() => deletaTexto(texto.id)}
        className="delete__button"
      />
    </AsideComponentStyled>
  );
}
