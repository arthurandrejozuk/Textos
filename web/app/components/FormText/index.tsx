
import styled from "styled-components"
import Box from "@art/default/Box"
import Texto from "../Texto"
import { useState } from "react"

const FormTextStyled = styled(Box)`
    
    display: flex;
    align-items: center;
    margin-left: 20%;
    margin-top: 5%;
    width: fit-content;
`

export default function FormText(){

  

    return(
        <FormTextStyled>
            <Texto/>
        </FormTextStyled>
    )
}