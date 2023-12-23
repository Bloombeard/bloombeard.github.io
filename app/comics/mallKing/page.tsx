import React from "react";
import Image from 'next/image'

import ContentHeader from "@/common/components/ContentHeader";
import { mallKingHeader } from "@/common/constants/headerBlocks";

const MallKing = () => {
  return (
    <main>
      <ContentHeader block={mallKingHeader} />
    </main>
  );
};

export default MallKing;
