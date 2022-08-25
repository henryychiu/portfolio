import Head from 'next/head';

const Meta = () => {
  const description = "Henry's Portfolio Website";
  const title = 'Henry Chiu';
  const url = 'henryychiu.com';
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={url} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
