import styled from "styled-components";
import Box from "@art/default/Box";
import Text from "@art/default/Text"
import { LuScrollText } from "react-icons/lu";
import { FaList } from "react-icons/fa";


const HeaderStyled = styled(Box)`
    position: fixed;
    width: 100%;
    top: 0%;
    background-color: #b47131;
    padding: 28px;
    display: flex;
    justify-content: space-between;
    z-index: 3;
    h1{
        font-size: 44px;
        color: #fddeb6
    }
    .title__box{
        display: flex;
        gap: 8px;
        margin-left: 60px;
    }
    .add__box{
        margin-right: 60px;
        cursor: pointer;
    }
`

export default function Header({onClick}){
    return(
        <HeaderStyled>
            <Box className="title__box">
                <LuScrollText color="fddeb6" size={36}/>
                <Text tag="h1">
                    Textos
                </Text>
            </Box>
            <Box className="add__box">
                <FaList onClick={onClick} color="fddeb6" size={36} />
            </Box>
        </HeaderStyled>
    )
}