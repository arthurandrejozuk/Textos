import styled, { keyframes } from "styled-components";
import Box from "@art/default/Box";
import Text from "@art/default/Text";
import { TextProps } from "../../interfaces/TextProps";
import { AiOutlineCaretLeft } from "react-icons/ai";
import Link from "next/link";

const fadeIn = keyframes`
   from {
    opacity: 0.7;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`
const fadeOut = keyframes`
   from {
    opacity: 1;
    transform: translateX(20px);
  }
  to {
    opacity:1;
    transform: translateX(0px);
  }
`


const AsideStyled = styled(Box)`
    height: 100vh; // Garante a altura de toda a viewport
    z-index: 1;
    width: 20%;
    padding: 32px;
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
    gap: 12px;
    animation: 250ms ${({ ativo }: any) => (ativo ? fadeIn : fadeOut)} forwards;
    
    .title__text, a {
        display: flex;
        align-items: center;
        gap: 4px;

        h3 {
            cursor: pointer;
        }
    }
    @media(min-width: 800px){
        width: 30%;
    }
`;

export default function Aside({textos, ativa}:TextProps){
    if(ativa) return(
        <AsideStyled>
            {textos?.map(texto => {
                return (
                    <Box className="title__text">
                        <Link href={`/textos/${texto.id}`}>
                            <AiOutlineCaretLeft size={28}/>
                            <Text tag="h3">{texto.title}</Text>
                        </Link>
                    </Box>
                )
            })}
        </AsideStyled>
    )
}