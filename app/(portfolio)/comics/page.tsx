import React from "react";
import { comicLinks } from '../../../common/constants/navLinks'
import Links from '../../../common/components/Links'

const Comics = () => {  
  return (
      <Links wrapperClass='hub-page--links-wrapper' linkClass='hub-page--link' links={comicLinks} isHubPage />
    )
}

export default Comics;
