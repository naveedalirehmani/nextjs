import React,{FC} from "react";
import { Button } from "./StyleButton";

interface IProps {
  title: string;
  onSubmit: () => void;
  type:string;
}

export const CardButton:FC<IProps> = ({ title, type, onSubmit }) => {
  return (
    <Button
    onClick={onSubmit}
      type={type}
    >
      {title}
    </Button>
  );
};
