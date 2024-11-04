import styled from "styled-components";
import Box from "@art/default/Box";
import Texto from "../Texto";
import { IFormText } from "../../interfaces/IFormText";

const FormTextStyled = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 14%;
  width: fit-content;

  @media (max-width: 500px) {
    margin-top: 30%;
  }
`;

export default function FormText({
  id,
  titulo,
  subtitulo,
  texto,
  alterar,
}: IFormText) {
  return (
    <FormTextStyled tag="section">
      <Texto
        altera={alterar}
        id={id}
        texto={texto}
        subtitulo={subtitulo}
        titulo={titulo}
      />
    </FormTextStyled>
  );
}
