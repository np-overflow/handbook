import React from 'react';
import Footer from '@theme-original/DocItem/Footer';

import Giscus from '@giscus/react';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <br/>
      <Giscus
        repo="np-overflow/handbook"
        repoId="R_kgDOH2CfTw"
        category="Proposals"
        categoryId="DIC_kwDOH2CfT84CRDC6"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="transparent_dark"
        lang="en"
        loading="lazy"
      />
    </>
  );
}
