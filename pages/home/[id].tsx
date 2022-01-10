import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
import Login from "../../components/login";
import Signup from "../../components/signup";
import Image from "next/image";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>
      <Background>{id === "login" ? <Login /> : <Signup />}</Background>
    </>
  );
};

export default Index;

const Background = styled.div`
  background-color: #0a0d20;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export async function getStaticProps({ params }) {
  return {
    props: { name: "data" },
  };
}

export async function getStaticPaths() {
  const data = ["login", "signup"];

  const paths = data.map((routes) => {
    return {
      params: {
        id: routes,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
