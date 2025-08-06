'use client';
import { useRouter } from "next/navigation";
import React from "react";

const Button = () => {
  const route = useRouter();

  const isLogin = true;

  const handleButton = () => {
    if (isLogin) {
      route.push("/about/address");
    } else {
      route.push("/");
    }
  };
  return (
    <div>
      <button className="cursor-pointer" type="button" onClick={handleButton}>
        Address
      </button>
    </div>
  );
};

export default Button;
