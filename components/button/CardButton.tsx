import React,{FC} from "react";
import { Button } from "./StyleButton";
import Spinner  from '../spinner';
interface IProps {
  title: string;
  onSubmit: () => void;
  type:string;
  isLoading:boolean;
}

export const CardButton:FC<IProps> = ({ title, type, onSubmit,isLoading }) => {
  console.log(isLoading)
  return (
    <Button
    isLoading={isLoading}
    onClick={onSubmit}
      type={type}
    >
      <div style={{position:'absolute',right:'70px'}}>
      {isLoading && <Spinner></Spinner>}
      </div>
      <div>
      {title}
      </div>
    </Button>
  );
};
