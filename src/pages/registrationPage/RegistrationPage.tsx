import Block from "core/components/base/Block";
import Input from "core/components/base/Input";
import PasswordInput from "core/components/base/PasswordInput";
import { RegistrationBlock } from "core/components/helpers/BlockHelpers";
import BlockName from "core/enum/BlockName";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction, setInputValueAction, setSuccessAction } from "./reducer/registrationActions";
import pages from "core/business/pages";
import ModalPopup from "core/components/base/ModalPopup";
import { useRouter } from "next/router";

export default () => {
	const registrationPage = useSelector((state: IGlobalAppState) => state.registrationPage);
	const dispatch = useDispatch();
	const router = useRouter();

	const handleChangeValue = (id: string, value: string) => {
		dispatch(setInputValueAction(id, value));
	};

	const handleRegisterClick = () => {
		dispatch(registerAction());
	};

	const onClosePopup = () => {
		dispatch(setSuccessAction(false));
		router.push(pages.login);
	}

	return (
		<Block>
			<ModalPopup onClose={onClosePopup} isOpen={registrationPage.isSuccess} title="Регистрация завершена" hasCloseButton>
				Регистрация успешно завершена
			</ModalPopup>
			<RegistrationBlock element="container">
				<RegistrationBlock element="wrap-container">
					<RegistrationBlock element="form">
						<span className="registration-page__title">Регистрация</span>
						<RegistrationBlock element="flex">
							<RegistrationBlock element="input-box" modifier="half">
								<Input
									id="login"
									value={registrationPage.login}
									onChange={handleChangeValue}
									isMainBlock
									block={BlockName.registrationPage}
									element="input"
									placeholder="Логин"
								/>
							</RegistrationBlock>
							<RegistrationBlock element="input-box" modifier="half">
								<Input
									id="email"
									value={registrationPage.email}
									onChange={handleChangeValue}
									isMainBlock
									block={BlockName.registrationPage}
									element="input"
									placeholder="Электронная почта"
								/>
							</RegistrationBlock>
						</RegistrationBlock>
						<RegistrationBlock element="flex">
							<RegistrationBlock element="input-box" modifier="half">
								<Input
									id="phone"
									value={registrationPage.phone}
									onChange={handleChangeValue}
									isMainBlock
									block={BlockName.registrationPage}
									element="input"
									placeholder="Телефон"
								/>
							</RegistrationBlock>
							<RegistrationBlock element="input-box" modifier="half">
								<PasswordInput
									id="password"
									value={registrationPage.password}
									onChange={handleChangeValue}
									isMainBlock
									block={BlockName.registrationPage}
									element="input"
									placeholder="Пароль"
								/>
							</RegistrationBlock>
						</RegistrationBlock>
						<RegistrationBlock element="input-box">
							<Input
								id="organizationName"
								value={registrationPage.organizationName}
								onChange={handleChangeValue}
								isMainBlock
								block={BlockName.registrationPage}
								element="input"
								placeholder="Имя или название организации"
							/>
						</RegistrationBlock>
						<RegistrationBlock onClick={handleRegisterClick} element="button">
							Зарегистрироваться
						</RegistrationBlock>
						<RegistrationBlock element="back-link">
							<Link href={pages.login}>На страницу логина</Link>
						</RegistrationBlock>
					</RegistrationBlock>
				</RegistrationBlock>
			</RegistrationBlock>
		</Block>
	);
};
