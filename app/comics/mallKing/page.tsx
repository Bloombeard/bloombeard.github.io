import React from "react";
import Image from 'next/image'

import grannyImage from '../../Granny.png'

const MallKing = () => {
  return (
    <main>
      <Image
        src={grannyImage}
        alt="enemies at the gates"
        quality={100}
        placeholder="blur"
      />
    </main>
  );
};

export default MallKing;
