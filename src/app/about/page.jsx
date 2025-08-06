import Link from "next/link";
import React from "react";
import Button from "./address/components/Button";

const AboutPage = () => {
  return (
    <div>
      <p className="font-bold text-3xl">AboutPage</p>
      <Link href="/about/address">Address</Link>
      <Button></Button>
    </div>
  );
};

export default AboutPage;
