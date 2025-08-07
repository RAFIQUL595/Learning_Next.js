import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <p>404 Page</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
