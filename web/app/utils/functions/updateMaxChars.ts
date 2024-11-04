import { Dispatch, SetStateAction } from "react";

export function modificaLetras(setMaxChars: Dispatch<SetStateAction<number>>) {
  const updateMaxChars = () => {
    if (window.innerWidth < 1000) {
      setMaxChars(15);
    } else {
      setMaxChars(30);
    }
  };
  // Adiciona listener para resize e atualiza os caracteres iniciais
  updateMaxChars();
  window.addEventListener("resize", updateMaxChars);

  return () => window.removeEventListener("resize", updateMaxChars);
}
