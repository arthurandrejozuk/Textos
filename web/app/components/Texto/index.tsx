import Box from "@art/default/Box";
import { useState } from "react";
import styled from "styled-components";

const TextoStyled = styled(Box)`
    
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 44px;
    .title{
        display: flex;
        gap: 4px;
        input, textarea{
            max-width: 900px;
            background-color: #f8e0bf;
            padding: 16px;
        }
        textarea{
            height: 500px;
        }
        input::placeholder{
            color: #885712;
        }
    }
    button {
        background-color: #b47131;
        color: #f8e0bf;
        padding: 12px;
        font-size: 32px ;
    }

`


export default function Texto(){

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [text, setText] = useState('');

    return(
        <TextoStyled>
            <form>
                <Box className="title">
                    <input placeholder="Titulo" onChange={(event) => setTitle(event.target.value)} type="text" value={title} />
                </Box>
                <Box className="title">
                    <input placeholder="Subtitulo" onChange={(event) => setSubtitle(event.target.value)} type="text" value={subtitle} />
                </Box>
                <Box className="title">
                    <textarea value={text} onChange={(event) => setText(event.target.value)}/>
                </Box>
                <button>Adicionar</button>
            </form>
        </TextoStyled>
    )
}