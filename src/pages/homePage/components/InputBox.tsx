import Input from "core/components/base/Input";
import PasswordInput from "core/components/base/PasswordInput";
import { HomeBlock } from "core/components/helpers/BlockHelpers";

const InputBox = (props: {
	label: string;
	value: string;
	isDisabled?: boolean;
	id?: string;
	onChange?: (id: string, value: string) => void;
	isPassword?: boolean;
}) => {
	const { label, value, isDisabled, id, isPassword } = props;

	return (
		<HomeBlock element="input-box">
			<HomeBlock element="input-box" modifier="label" isMainBlock={false}>
				{label}
			</HomeBlock>
			{isPassword ? (
				<PasswordInput value={value} id={id} onChange={props.onChange} />
			) : (
				<Input id={id} onChange={props.onChange} value={value} isDisabled={isDisabled} />
			)}
		</HomeBlock>
	);
};

export default InputBox;
