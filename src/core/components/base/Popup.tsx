import { Fade, Popper, PopperPlacementType, Paper, Typography } from "@material-ui/core";
import React from "react";

interface PopupProps {
	isOpen?: boolean;
	anchorEl: HTMLElement;
	placement?: PopperPlacementType;
}

const Popup = (props: React.PropsWithChildren<PopupProps>) => {
	const { isOpen, anchorEl, placement, children } = props;

	return (
		<Popper transition placement={placement || "bottom"} open={isOpen} anchorEl={anchorEl}>
			{({ TransitionProps }) => (
				<Fade {...TransitionProps} timeout={350}>
					<Paper>
						{children}
					</Paper>
				</Fade>
			)}
		</Popper>
	);
};

export default Popup;
