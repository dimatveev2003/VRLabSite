import Block from "core/components/base/Block";
import Input from "core/components/base/Input";
import PasswordInput from "core/components/base/PasswordInput";
import { LoginBlock } from "core/components/helpers/BlockHelpers";
import BlockName from "core/enum/BlockName";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "./reducer/loginActions";

export default () => {
	const loginPage = useSelector((state: IGlobalAppState) => state.loginPage) || {};
	const dispatch = useDispatch();

	const handleChangeValue = (id: string, value: string) => {
		dispatch(setInputValue(id, value));
	};

	return (
		<Block>
			<LoginBlock element="container">
				<LoginBlock element="wrap-container">
					<LoginBlock element="form">
						<span className="login-page__title">Логин</span>
						<LoginBlock element="input-box">
							<Input
								id="login"
								value={loginPage.login}
								onChange={handleChangeValue}
								isMainBlock
								block={BlockName.loginPage}
								element="input"
								placeholder="Логин"
							/>
						</LoginBlock>
						<LoginBlock element="input-box">
							<PasswordInput
								id="password"
								value={loginPage.password}
								onChange={handleChangeValue}
								isMainBlock
								block={BlockName.loginPage}
								element="input"
								placeholder="Пароль"
							/>
						</LoginBlock>
						<LoginBlock element="button-box">
							<LoginBlock element="button">Войти</LoginBlock>
							<LoginBlock element="register-link">
								<Link href="/registration">Регистрация</Link>
							</LoginBlock>
							<LoginBlock element="back-link">
								<Link href="/">На главную</Link>
							</LoginBlock>
						</LoginBlock>
					</LoginBlock>
				</LoginBlock>
			</LoginBlock>
		</Block>
	);
};
