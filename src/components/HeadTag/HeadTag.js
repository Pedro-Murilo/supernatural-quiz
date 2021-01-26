import Head from "next/head";

function HeadTag() {
  return (
    <Head>
      <title>Supernatural Quiz</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        property="og:image"
        content="https://wallpapercave.com/wp/wp4073145.png"
      />
      <link rel="shortcut icon" href="favicon.ico" />
    </Head>
  );
}

export default HeadTag;