import Box from "@art/default/Box";
import styled from "styled-components";

const LoadingStyled = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  .lds-ring {
    color: orange;
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

export default function Loading() {
  return (
    <LoadingStyled>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingStyled>
  );
}
