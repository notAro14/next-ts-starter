import Head from "next/head";
import Article from "src/adapters/primary/react/Home";

export default function Page() {
  return (
    <>
      <Head>
        <title>Workout App</title>
      </Head>
      <div>Workout App</div>
      <Article />
    </>
  );
}
