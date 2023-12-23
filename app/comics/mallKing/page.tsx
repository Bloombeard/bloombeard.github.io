import React from "react";
import Image from 'next/image'

import ContentHeader from "@/common/components/ContentHeader";
import { mallKingHeader } from "@/common/constants/headerBlocks";
import { mallKingPages } from "@/common/constants/comicPages";
import ComicReader from "@/common/components/ComicReader";

const MallKing = () => {
  return (
    <main>
      <ContentHeader block={mallKingHeader} />
      <ComicReader pages={mallKingPages} />
    </main>
  );
};

export default MallKing;
