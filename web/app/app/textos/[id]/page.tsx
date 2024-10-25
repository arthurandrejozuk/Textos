"use client";

import { useEffect, useState } from "react";
import { fetchApi } from "../../../utils/infra/fetchApi";
import FormText from "../../../components/FormText";
import { GlobalStyles } from "../../../theme/GlobalStyles";
import DefaultLayout from "../../../screens/DefaultLayout";
import { Josefin_Sans } from "@next/font/google";

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

export default function TextosPage({ params }) {
  const [texto, setTexto] = useState<Props>();

  useEffect(() => {
    async function fetchTexto() {
      const data = await fetchApi(`http://localhost:3000/textos/${params.id}`);
      console.log("Dados recebidos da API:", data);
      setTexto(data);
    }
    fetchTexto();
  }, [params.id]);

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
