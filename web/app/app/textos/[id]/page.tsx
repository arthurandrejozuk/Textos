"use client";

import { useEffect, useState } from "react";
import { fetchApi } from "../../../utils/infra/fetchApi";
import FormText from "../../../components/FormText";
import { GlobalStyles } from "../../../theme/GlobalStyles";
import DefaultLayout from "../../../screens/DefaultLayout";
import { josefinSans } from "../../../theme/font-style";
import Loading from "../../../components/Loading";
import { useRouter } from "next/navigation";
import { IText } from "../../../interfaces/ITexto";

export default function TextosPage({ params }) {
  const [texto, setTexto] = useState<IText>();
  const [erro, setErro] = useState();
  const router = useRouter();

  useEffect(() => {
    async function fetchTexto() {
      try {
        const data = await fetchApi(
          `http://localhost:3000/textos/${params.id}`
        );
        setTexto(data);
      } catch (erro) {
        setErro(erro);
      }
    }
    fetchTexto();
  }, [params.id]);

  if (!texto) {
    return <Loading />;
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
