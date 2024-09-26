import Box from "@art/default/Box"
import styled from "styled-components"

const DefaultStyled = styled(Box)`
    

` 

export default function DefaultLayout({className, children}){
    return(
        <DefaultStyled className={className}>
            {children}
        </DefaultStyled>
    )
}