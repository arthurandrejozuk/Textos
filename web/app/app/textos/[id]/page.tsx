"use client";

import { useEffect, useState } from "react";
import { fetchApi } from "../../../utils/infra/fetchApi";
import FormText from "../../../components/FormText";
import { GlobalStyles } from "../../../theme/GlobalStyles";
import DefaultLayout from "../../../screens/DefaultLayout";
import { Josefin_Sans } from "@next/font/google";
import styled from "styled-components";
import Box from "@art/default/Box";

interface Props {
  id: string;
  title: string;
  subtitle: string;
  text: string;
}

const josefinSans = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Loading = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  .lds-ring {
    color: orange
  }
  .lds-ring,
  .lds-ring div {
    box-sizing: border-box;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid currentColor;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: currentColor transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function TextosPage({ params }) {
  const [texto, setTexto] = useState<Props>();

  useEffect(() => {
    async function fetchTexto() { 
      const data = await fetchApi(`http://localhost:3000/textos/${params.id}`);
      //console.log("Dados recebidos da API:", data);
      setTexto(data);
    }
    fetchTexto();
  }, [params.id]);

  if(!texto){
    return(
      <Loading>
      <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Loading>
    )
  }

  return (
    <>
      <GlobalStyles />
      <DefaultLayout className={josefinSans.className}>
        <FormText
          alterar={true}
          id={texto?.id}
          titulo={texto?.title || ""} // Passar título recebido da API
          subtitulo={texto?.subtitle || ""} // Passar subtítulo recebido da API
          texto={texto?.text || ""}
        />
      </DefaultLayout>
    </>
  );
}
