import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { GlobalStyles } from "../theme/GlobalStyles";
import DefaultLayout from "../screens/DefaultLayout";
import { josefinSans } from "../theme/font-style";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DefaultLayout className={josefinSans.className}>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
}
