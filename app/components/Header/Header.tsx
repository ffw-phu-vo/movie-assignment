import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header py-6">
      <div className="logo">
        <Link href="/" aria-label="Go to the homepage">
          <Image src="/logo.svg" alt="Logo" width={200} height={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
