import Box from "@art/default/Box";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchApi } from "../utils/infra/fetchApi";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { useRouter } from "next/navigation";
import Text from "@art/default/Text";

const DefaultStyled = styled(Box)`
  .falha {
    z-index: 2;
    position: absolute;
    top: 22%;
    left: 15%;
    font-size: 32px;
    color: red;
  }
`;

export default function DefaultLayout({ children, className }) {
  const [textos, setTextos] = useState();
  const [ativa, setAtiva] = useState(false);
  const [erro, setErro] = useState();

  const router = useRouter();

  useEffect(() => {
    const data = async () => {
      try {
        const dado = await fetchApi("http://localhost:3000/textos");
        setTextos(dado);
      } catch (e) {
        setErro(e);
      }
      return data;
    };
    data();
  }, [ativa]);

  console.log(textos);

  return (
    <DefaultStyled tag="section" className={className}>
      {erro ? (
        <Text tag="h1" className="falha">
          Não é possível enviar o texto
        </Text>
      ) : (
        <></>
      )}
      <Header
        mudaRota={() => {
          router.push("/");
        }}
        onClick={() => {
          setAtiva(!ativa);
        }}
      />
      {children}
      <Aside ativa={ativa} textos={textos} />
    </DefaultStyled>
  );
}
