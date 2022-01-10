import React, { useState } from "react";
import { Card } from "../card/Card";
import { CardButton } from "../button/CardButton";
import { CardInput } from "../input/CardInput";
import {
  P1,
  Hr,
  Heading,
  A,
  TermsContainer,
  CheckDiv,
  Icons,
  Footer,
} from "../../styles/GlobalStyles";
import { CheckBoxInput } from "../input/CheckBoxInput";
import { IconDiv } from "../icons/Icons";
import { axiosLogin, axiosPost } from "../../axios/axios";
import Link from "next/link";
import Image from "next/image";

export const LogIn = () => {
  const [userToken, setUserToken] = useState<string>("");
  const [userData, setUserData] = useState<{
    email: string;
    password: string;
    checkbox: boolean;
  }>({
    email: "",
    password: "",
    checkbox: false,
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const checkboxHangler = () => {
    setUserData({ ...userData, checkbox: !userData.checkbox });
  };
  const onSubmit = async () => {
    if (!userData.email || !userData.password)
      return console.log("email or password not entered");
    if (!userData.checkbox) return console.log("checkbox not checked");

    try {
      const result = await axiosLogin.post<any>("/", userData);
      setUserToken(result.data.token);
      console.log(result.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const Post = async () => {
    try {
      const result = await axiosPost.get("/", {
        headers: { "auth-token": userToken },
      });
      console.log(result.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <Card>
      <Heading>Login</Heading>
      <CardInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        name="email"
        type="email"
        placeholder="email"
      />
      <CardInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        name="password"
        type="password"
        placeholder="Password"
      />
      <TermsContainer>
        <CheckDiv>
          <CheckBoxInput
            checked={userData.checkbox}
            name="checkbox"
            onChange={checkboxHangler}
          />
          <P1>Remember Me</P1>
          <A>Forget Password? </A>
        </CheckDiv>
      </TermsContainer>
      <CardButton onSubmit={onSubmit} type="submit" title="Log In" />
      <Hr>Or</Hr>
      <div style={{ marginTop: "1rem" }}> </div>
      <Icons>
        <IconDiv onClick={Post}>
          <Image
            src="/facebook.svg"
            alt="Picture of the author"
            width={25}
            height={25}
          />
        </IconDiv>
        <IconDiv onClick={Post}>
          <Image
            src="/instagram.svg"
            alt="Picture of the author"
            width={25}
            height={25}
          />
        </IconDiv>
        <IconDiv onClick={Post}>
          <Image
            src="/twitter.svg"
            alt="Picture of the author"
            width={25}
            height={25}
          />
        </IconDiv>
      </Icons>
      <Footer>
        <P1>
          Don&apos;t have an account?
          <Link passHref href="/home/signup">
            <A>Sign Up</A>
          </Link>
        </P1>
      </Footer>
    </Card>
  );
};

export default LogIn;
