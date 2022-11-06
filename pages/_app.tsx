import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout || ((page: JSX.Element) => page);
  return getLayout(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
