import { useAppContext, useDispatch, useSelector } from "core/business/hooks/commonHooks";
import ModalPopup from "core/components/base/ModalPopup";
import { HomeBlock, LayoutBlock } from "core/components/helpers/BlockHelpers";
import Layout from "core/components/layout/Layout";
import { isEmpty } from "core/utils/objectExtensions";
import React from "react";
import PasswordChange from "./components/PasswordChange";
import Profile from "./components/Profile";
import { useHomePageInitialize } from "./pageHooks/pageHooks";
import { setChangePwdSuccessAction, setInputValueAction, setUpdateInfoSuccessAction } from "./reducer/homeActions";

const HomePage = () => {
	const context = useAppContext();
	const page = useSelector((s) => s.homePage);
	const dispatch = useDispatch();

	useHomePageInitialize();

	const handleChangeInput = (id: string, value: string) => {
		dispatch(setInputValueAction(id, value));
	};

	const handleClosePopupPwd = () => {
		dispatch(setChangePwdSuccessAction(false));
	}

	const handleClosePopupInfo = () => {
		dispatch(setUpdateInfoSuccessAction(false));
	}


	return (
		<Layout>
			<LayoutBlock element="content">
				<ModalPopup
					onClose={handleClosePopupPwd}
					isOpen={page.isPasswordChangeSuccess}
					title="Смена пароля завершена"
					hasCloseButton>
					Пароль успешно изменен!
				</ModalPopup>
				<ModalPopup
					onClose={handleClosePopupInfo}
					isOpen={page.isClientInfoChaneSuccess}
					title="Информация изменена"
					hasCloseButton>
					Информация о пользователе успешно изменена!
				</ModalPopup>
				{isEmpty(context.client) ? null : (
					<HomeBlock>
						<Profile onChangeInput={handleChangeInput} clientInfo={context.client} page={page} />
						<PasswordChange onChangeInput={handleChangeInput} page={page} />
					</HomeBlock>
				)}
			</LayoutBlock>
		</Layout>
	);
};

export default HomePage;
