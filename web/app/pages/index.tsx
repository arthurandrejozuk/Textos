import Box from "@art/default/Box";
import styled from "styled-components";
import Header from "../components/Header";

const HomeStyled = styled(Box)`
    
    

`

export default function Home(){
    return(
        <HomeStyled>
            <Header/>
        </HomeStyled>
    )
}