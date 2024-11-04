import styled, { keyframes } from "styled-components";
import Box from "@art/default/Box";
import Text from "@art/default/Text";
import AsideComponent from "../AsideComponent";
import { IText } from "../../interfaces/ITexto";

const fadeIn = keyframes`
   from {
    opacity: 0.7;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;
const fadeOut = keyframes`
   from {
    opacity: 1;
    transform: translateX(20px);
  }
  to {
    opacity:1;
    transform: translateX(0px);
  }
`;

const AsideStyled = styled(Box)`
  height: 100vh; // Garante a altura de toda a viewport
  z-index: 1;
  width: 30%;
  padding-left: 12px;
  padding-top: 120px;
  scroll-behavior: smooth;
  background-color: #b47031df;
  color: #fddeb6;
  position: fixed; // Alterar para 'fixed' para que o aside fique fixo durante a rolagem
  font-size: 28px;
  top: 0; // Ajusta a posição para começar do topo
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: 250ms ${({ ativo }: any) => (ativo ? fadeIn : fadeOut)} forwards;

  @media (max-width: 1000px) {
    width: 60%;
    background-color: #b47031;
  }
`;

export default function Aside({ textos, ativa }) {
  if (ativa)
    return (
      <AsideStyled>
        {textos ? (
          textos?.map((texto: IText) => {
            return <AsideComponent texto={texto} />;
          })
        ) : (
          <Text>Falha ao encontrar...</Text>
        )}
      </AsideStyled>
    );
}
