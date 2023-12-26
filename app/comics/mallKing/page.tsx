import React from "react";
import Image from 'next/image'

import ContentHeader from "@/common/components/ContentHeader";
import { mallKingHeader } from "@/common/constants/headerBlocks";
import { mallKingPages } from "@/common/constants/comicPages";
// import mallKingPDF from "@/public/assets/mallKingPages/mallKingPDF.pdf"
import mallKingPDF from "@/public/assets/mallKingPages/mallKingPDF.pdf"
import ComicReader from "@/common/components/ComicReader";

const MallKing = () => {
  return (
    <main>
      <ContentHeader block={mallKingHeader} />
      <ComicReader pages={mallKingPDF} />
    </main>
  );
};

export default MallKing;
