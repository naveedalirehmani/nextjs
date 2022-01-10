import React,{FC} from 'react';
import { Div } from './styleIcons';

interface IProps {
	children: React.ReactNode;
	onClick: () => void;
}

export const IconDiv:FC<IProps> = ({ children,onClick }) => {
	return <Div onClick={onClick}>{children}</Div>;
};
