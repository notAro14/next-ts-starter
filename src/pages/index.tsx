import Head from "next/head";
import HomePage from "src/adapters/primary/react/components/HomePage";

export default function Page() {
  return (
    <>
      <Head>
        <title>Typescrit, React, Redux starter</title>
      </Head>
      <HomePage />
    </>
  );
}
