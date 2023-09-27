import React from 'react';
import { AiFillInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Copyright © 2023 Full Bag of Chips. All rights reserved.</p>
      <p className="icons">
      <Link href="https://www.instagram.com/adriel.puello/">
        <AiFillInstagram/>
      </Link>
      <Link href="https://www.linkedin.com/in/adriel-puello/">
        <AiOutlineLinkedin/>
      </Link>
      </p>
    </div>
  )
}

export default Footer