import Avatar from "@material-ui/core/Avatar";
import { useAppContextProvider, useDispatch, useSelector } from "core/business/hooks/commonHooks";
import pages from "core/business/pages";
import { isEmpty } from "core/utils/objectExtensions";
import { useRouter } from "next/router";
import React from "react";
import { HeaderBlock } from "../helpers/BlockHelpers";

export default () => {
	const contextProvider = useAppContextProvider();
	const context = contextProvider.context;
	const homePage = useSelector((state) => state.homePage);
	const router = useRouter();

	const onExitClick = () => {
		contextProvider.exit();
	};

	const onAvatarClick = () => {
		router.push(pages.home);
	};

	return (
		<HeaderBlock element="profile">
			{homePage.isFetchClientInfo || isEmpty(context.client) ? (
				<div className="loader__avatar"></div>
			) : (
				<React.Fragment>
					<HeaderBlock element="profile-name">{context.client.organizationName}</HeaderBlock>
					<HeaderBlock onClick={onAvatarClick} element="profile-avatar">
						<Avatar>{context.client.organizationName.charAt(0)}</Avatar>
					</HeaderBlock>
				</React.Fragment>
			)}
			<HeaderBlock onClick={onExitClick} element="profile-exit">
				<HeaderBlock element="profile-exit" modifier="icon" />
			</HeaderBlock>
		</HeaderBlock>
	);
};
