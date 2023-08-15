import Head from 'next/head';

const Meta = () => {
  const description = "Henry's Portfolio Website";
  const title = 'Henry Chiu';
  const url = 'https://www.henryychiu.com/';
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Henry Chiu, software engineer, full stack developer, portfolio"
      />

      <meta property="og:description" content={description} />
      <meta property="og:image" content="/metaImage.png" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
