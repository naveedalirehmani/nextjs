import React,{FC} from "react";
import { Input } from "./StyleInput";

interface IProps {
  name: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const CardInput:FC<IProps> = ({ name, placeholder,type,onChange }) => {
  return (
    <Input
    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};
