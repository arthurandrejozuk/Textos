import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import { theme } from "../theme/theme"
import {Josefin_Sans} from "@next/font/google"
import { GlobalStyles } from "../theme/GlobalStyles";
import DefaultLayout from "../screens/DefaultLayout";


const josefinSans = Josefin_Sans({
  weight:"400",
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <DefaultLayout className={josefinSans.className}>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}