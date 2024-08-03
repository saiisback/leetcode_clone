import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
    <Head>
      <title>CODE CRAFT</title>
      <meta name='viewport' content="width=device-width, initial-scale=1"/>
      <link rel='icon' href="/logo2.png"/>
    </Head>
    <ToastContainer/>
    <Component {...pageProps} />
    </RecoilRoot>
  );
}
