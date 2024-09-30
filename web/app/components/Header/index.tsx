import styled from "styled-components";
import Box from "@art/default/Box";
import Text from "@art/default/Text"
import { LuScrollText } from "react-icons/lu";

const HeaderStyled = styled(Box)`
    
    background-color: #b47131;
    padding: 32px;

    h1{
        font-size: 44px;
        color: #fddeb6
    }
    .title__box{
        display: flex;
        gap: 8px;
        margin-left: 32px;
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
            <Box>
                
            </Box>
        </HeaderStyled>
    )
}