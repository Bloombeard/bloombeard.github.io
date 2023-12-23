import ContentHeader from "@/common/components/ContentHeader"
import { auditHeader } from "@/common/constants/headerBlocks"
import React from "react"

const Audit = () => {
  return (
    <main>
      <ContentHeader block={auditHeader} />
    </main>
  )
}

export default Audit
