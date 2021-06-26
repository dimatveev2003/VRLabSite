import { useDispatch } from "core/business/hooks/commonHooks";
import { HomeBlock } from "core/components/helpers/BlockHelpers";
import { changePasswordAction } from "../reducer/homeActions";
import InputBox from "./InputBox";

const PasswordChange = (props: { page: IHomePageState; onChangeInput: (id: string, value: string) => void }) => {
	const { page } = props;
	const dispatch = useDispatch();

	const handleClickChangePwd = () => {
		dispatch(changePasswordAction());
	};

	return (
		<HomeBlock element="password">
			<InputBox id="password" onChange={props.onChangeInput} isPassword value={page.password} label="Новый пароль" />
			<button onClick={handleClickChangePwd} className="home__button">
				Изменить пароль
			</button>
		</HomeBlock>
	);
};

export default PasswordChange;
