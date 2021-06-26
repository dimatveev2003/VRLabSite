import Avatar from "@material-ui/core/Avatar";
import { useAppContext } from "core/business/hooks/commonHooks";
import { HeaderBlock } from "../helpers/BlockHelpers";
import Menu from "./menu/Menu";
import ProfileAvatar from "./ProfileAvatar";

export default () => {
	const context = useAppContext();

	return (
		<HeaderBlock>
			<HeaderBlock element={"content"}>
				<HeaderBlock element={"logo"} />
				<Menu currentPage={context.pageNavigationState} />

				<ProfileAvatar />
			</HeaderBlock>
		</HeaderBlock>
	);
};
