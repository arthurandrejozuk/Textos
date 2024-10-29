

import styled from "styled-components";
import Box from "@art/default/Box";
import Text from "@art/default/Text"
import { LuScrollText } from "react-icons/lu";
import { FaList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

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
        display: flex;
        align-items: center;
        gap: 8px;
        color: #fddeb6
    }
    .title__box{
        display: flex;
        gap: 8px;
        margin-left: 60px;
    }
    .add__text{
        cursor: pointer;
    }
    .add__box{
        margin-right: 60px;
        cursor: pointer;
    }
    @media(max-width:600px){
        .text__list{
            background-color: #b47031;
            padding: 8px;
            width: 48px;
            border-radius: 4px;
            height: auto;
            position: fixed;
            left: 8%;
            top: 10%;
        }
    }
`

export default function Header({onClick, rota}){

 

    return(
        <HeaderStyled>
            <Box className="title__box">
                <LuScrollText  color="fddeb6" size={36}/>
                <Text tag="h1">
                    Textos
                    <FaPlus onClick={rota} className="add__text" size={28}/>
                </Text>
            </Box>
            <Box className="add__box">
                <FaList className="text__list" onClick={onClick} color="fddeb6" size={36} />
            </Box>
        </HeaderStyled>
    )
}