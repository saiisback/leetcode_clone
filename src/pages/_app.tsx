import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Head } from "next/document";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <title>CODE CRAFT</title>
        <meta name="viewport" content="width=device-width,inital-scale=1"/>
        <link rel="icon" href="pfp.png"/>
        <meta name="description" content="Code craft"/>
      </head>
    <Component {...pageProps} />
    </>
  );
}
