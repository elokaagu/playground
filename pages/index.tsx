import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Playground | Framer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="grid content-center justify-center items-center w-screen h-screen bg-background">
        <h1 className="text-3xl pb-10  text-white font-bold ">Introduction</h1>
        <h2 className="text-2xl  text-white font-regular ">
          Get started with Motion and learn by exploring interactive examples
        </h2>
      </div>
    </div>
  );
}
