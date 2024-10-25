import Box from "@art/default/Box";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchApi } from "../utils/infra/fetchApi";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { useRouter } from "next/navigation";

const DefaultStyled = styled(Box)``;

export default function DefaultLayout({children, className}){

    const [textos, setTextos] = useState();
    const [ativa, setAtiva] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const data = async () => {
            try{
                const dado = await fetchApi("http://localhost:3000/textos")
                console.log(dado);
                setTextos(dado);
            } catch (e) {
                console.log(e);
            } 
            return data;
        }
      data();
    },[])

    console.log(textos);

    return(
        <DefaultStyled tag="section" className={className}>
            <Header rota={() => {router.push('/')}} onClick={() => {setAtiva(!ativa)}}/>
            {children}
            <Aside ativa={ativa} textos={textos} />
        </DefaultStyled>
    )
} 
