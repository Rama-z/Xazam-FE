import React from "react";
import Head from "next/head";

function Header({ children, title }) {
  return (
    <>
      <Head>
        <title>{`${title} | Xazam`}</title>
        <meta
          name="description"
          content="Xazam || Solution For Your Entertain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}

export default Header;
