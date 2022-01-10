import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home/signup");
  });
  return <div></div>;
};

export default Index;
