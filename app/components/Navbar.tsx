import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <Link href="/comics">Comics</Link>
      <Link href="/games">Games</Link>
      <Link href="https://bloombeard.tumblr.com/">Blog</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default Navbar;
