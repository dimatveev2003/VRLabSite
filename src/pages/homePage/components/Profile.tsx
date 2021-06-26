import { useDispatch } from "core/business/hooks/commonHooks";
import { HomeProfileBlock } from "core/components/helpers/BlockHelpers";
import { saveNewDataAction } from "../reducer/homeActions";
import InputBox from "./InputBox";

const Profile = (props: {
	clientInfo: IClientInfo;
	page: IHomePageState;
	onChangeInput: (id: string, value: string) => void;
}) => {
	const { clientInfo, page } = props;
	const dispatch = useDispatch();

	const handleSaveClick = () => {
		dispatch(saveNewDataAction());
	};

	return (
		<HomeProfileBlock>
			<h1 className="home__title">Профиль</h1>
			<HomeProfileBlock>
				<HomeProfileBlock modifier="row" isMainBlock={false}>
					<InputBox label="Логин" isDisabled value={clientInfo.login} />
					<InputBox label="Название организации" isDisabled value={clientInfo.organizationName} />
				</HomeProfileBlock>
				<HomeProfileBlock modifier="row" isMainBlock={false}>
					<InputBox onChange={props.onChangeInput} id="phone" label="Телефон" value={page.phone} />
					<InputBox onChange={props.onChangeInput} id="email" label="Электронная почта" value={page.email} />
				</HomeProfileBlock>
				<HomeProfileBlock modifier="row" isMainBlock={false}>
					<button onClick={handleSaveClick} className="home__button">Сохранить</button>
				</HomeProfileBlock>
			</HomeProfileBlock>
		</HomeProfileBlock>
	);
};

export default Profile;
