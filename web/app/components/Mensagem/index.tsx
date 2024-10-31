import Box from "@art/default/Box";
import Text from "@art/default/Text";
import styled from "styled-components";

const MensagemStyled = styled(Box)`
  position: fixed;
  bottom: 12%;
  right: 12%;
  font-size: 40px;

  .mensagem__sucesso {
    background-color: #63d663a0;
    color: green;
    padding: 12px;
    border-radius: 12px;
  }

  .mensagem__falha {
    background-color: #ff000077;
    color: red;
    padding: 12px;
    border-radius: 12px;
  }
`;

export default function Mensagem({ tipo }: { tipo: string }) {
  return (
    <MensagemStyled>
      <Text className={`mensagem__${tipo}`}>
        {tipo != ""
          ? tipo.charAt(0).toUpperCase() + tipo.slice(1) + " ao enviar!"
          : ""}
      </Text>
    </MensagemStyled>
  );
}
