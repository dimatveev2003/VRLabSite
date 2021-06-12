import classNames from "classnames";
import React from "react";
import Block from "./Block";
import Input from "./Input";

interface InputProps extends BaseBlockProps {
	onChange?: (id: string, value: string) => void;
	value: string;
	id?: string;
	placeholder?: string;
}

export default (props: InputProps) => {
	const [isShow, setShow] = React.useState(false);

	const handleClickEye = () => {
		setShow(!isShow);
	};

	const iconClasses = classNames({
		"password-control": true,
		"password-control_open": isShow
	});

	return (
		<Block block="password" isMainBlock>
			<Input {...props} type={isShow ? "text" : "password"} />
			<a href="#" className={iconClasses} onClick={handleClickEye} />
		</Block>
	);
};
