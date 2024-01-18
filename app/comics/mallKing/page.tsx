"use client"

import React, { useState } from "react";
import Image from 'next/image'
import { pdfjs } from 'react-pdf'

import ContentHeader from "@/common/components/ContentHeader";
import { mallKingHeader } from "@/common/constants/headerBlocks";
import { mallKingPages } from "@/common/constants/comicPages";
// import mallKingPDF from "@/public/assets/mallKingPages/mallKingPDF.pdf"
import { comicPDFs } from "@/common/constants/comicPages";
import ComicReader from "@/common/components/ComicReader";

const MallKing = () => {
  
  const [isReaderLoaded, setIsReaderLoaded] = useState<boolean>(false)
  
  return (
    <main>
      <ContentHeader block={mallKingHeader} isReaderLoaded={isReaderLoaded} openReaderCallback={setIsReaderLoaded} />
      <ComicReader isLoaded={isReaderLoaded} shouldLoop pages={comicPDFs.mallKingHiRes} />
    </main>
  );
};

export default MallKing;
