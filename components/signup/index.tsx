import React, { useState } from "react";
import { axiosSignup } from "../../axios/axios.js";
import { Card } from "../card/Card";
import { CardButton } from "../button/CardButton";
import { CardInput } from "../input/CardInput";
// import {ValidationSpan} from '../validation/Span.jsx';
import {
  P1,
  Heading,
  A,
  TermsContainer,
  CheckDiv,
  Footer,
} from "../../styles/GlobalStyles";
import { CheckBoxInput } from "../input/CheckBoxInput";
import Link from "next/link";

export const SignUp = () => {
  const [userData, setUserData] = useState<{
    email: string;
    password: string;
    checkbox: boolean;
    userName: string;
    passwordConfirm: string;
  }>({
    userName: "",
    password: "",
    passwordConfirm: "",
    email: "",
    checkbox: false,
  });
  const [isLoading,setIsLoading] = useState(false)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const onChangeCheckbox = () => {
    setUserData({ ...userData, checkbox: !userData.checkbox });
  };

  const onSubmit = async () => {
    if (!userData.email || !userData.userName)
    return console.log("email or username not entered");
    if (userData.password !== userData.passwordConfirm || !userData.password)
    return console.log("Passwords do not match");
    if (!userData.checkbox) return console.log("checkbox not checked");
    setIsLoading(true);
    try {
      const result = await axiosSignup.post("/", userData);
      console.log(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <Heading>Sign Up</Heading>
      <CardInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        name="userName"
        type="text"
        placeholder="User Name"
      />
      <CardInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        name="email"
        type="text"
        placeholder="E-mail Address"
      />
      <CardInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        name="password"
        type="password"
        placeholder="Create Password"
      />
      <CardInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        name="passwordConfirm"
        type="password"
        placeholder="Re-enter Password"
      />
      <TermsContainer>
        <CheckDiv>
          <CheckBoxInput
            name="checkbox"
            checked={userData.checkbox}
            onChange={onChangeCheckbox}
          />
          <P1>I Accept the</P1>
          <Link passHref href="/terms&conditions">
            <A>Terms and Conditions </A>
          </Link>
        </CheckDiv>
      </TermsContainer>
      <CardButton isLoading={isLoading} onSubmit={() => onSubmit()} title="Sign Up" type="submit" />
      <Footer>
        <P1>
          Already have a account?
          <Link passHref href="/home/login">
            <A>Log In</A>
          </Link>
        </P1>
      </Footer>
    </Card>
  );
};

export default SignUp;
