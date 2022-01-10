import React, { FC } from "react";
import { Checkbox } from "./styleCheckBox";

interface IProps {
  checked: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBoxInput: FC<IProps> = ({ checked, name,onChange }) => {
  return (
    <Checkbox
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};
