import styled from "styled-components";
import Box from "@art/default/Box";
import Text from "@art/default/Text"
import { LuScrollText } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";


const HeaderStyled = styled(Box)`
    
    background-color: #b47131;
    padding: 32px;
    display: flex;
    justify-content: space-between;

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

export default function Header(){
    return(
        <HeaderStyled>
            <Box className="title__box">
                <LuScrollText color="fddeb6" size={36}/>
                <Text tag="h1">
                    Textos
                </Text>
            </Box>
            <Box className="add__box">
                <FaPlus color="fddeb6" size={36}/>
            </Box>
        </HeaderStyled>
    )
}