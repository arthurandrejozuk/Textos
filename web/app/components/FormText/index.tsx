
import styled from "styled-components"
import Box from "@art/default/Box"
import Texto from "../Texto"

const FormTextStyled = styled(Box)`
    
    display: flex;
    align-items: center;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 12%;
    width: fit-content;
    
`

export default function FormText({id, titulo, subtitulo, texto, alterar}:{id?:string, titulo?:string, subtitulo?:string, texto?:string, alterar: boolean}){

    return(
        <FormTextStyled tag="section">
            <Texto altera={alterar} id={id} texto={texto} subtitulo={subtitulo} titulo={titulo}/>
        </FormTextStyled>
    )
}