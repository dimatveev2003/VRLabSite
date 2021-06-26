import { getBlockStyle } from "core/business/componentBusiness/baseComponentBusiness";
import { isFunction } from "core/utils/objectExtensions";
import React from "react";
import TextField from "@material-ui/core/TextField";

interface InputProps extends BaseBlockProps {
	onChange?: (id: string, value: string) => void;
	value: string;
	id?: string;
	placeholder?: string;
	type?: string;
	isDisabled?: boolean;
}

export default (props: InputProps) => {
	const styles = getBlockStyle(props);

	const handleChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
		if (isFunction(props.onChange)) {
			props.onChange(props.id, e.target.value);
		}
	};

	return (
		<input
			disabled={props.isDisabled}
			className={styles}
			id={props.id}
			value={props.value}
			placeholder={props.placeholder}
			onChange={handleChange}
			type={props.type}
		/>
	);
};
