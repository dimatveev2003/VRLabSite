import Popup from "core/components/base/Popup";
import { BundleBlock } from "core/components/helpers/BlockHelpers";
import React, { useState } from "react";

const BundleLab = (props: { lab: ILaboratoryModel }) => {
	const lab = props.lab;

	const [isOpen, setIsOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const onFocus: React.MouseEventHandler<HTMLLIElement> = (event) => {
		setAnchorEl(event.currentTarget);
		setIsOpen(true);
	};

	const onBlur = () => {
		setAnchorEl(null);
		setIsOpen(false);
	};

	return (
		<React.Fragment>
			<li onMouseEnter={onFocus} onMouseLeave={onBlur}>
				<a href="#">{lab.name}</a>
			</li>
			<Popup isOpen={isOpen} anchorEl={anchorEl}>
				<BundleBlock modifier="desc-tip">{lab.description}</BundleBlock>
			</Popup>
		</React.Fragment>
	);
};

export default BundleLab;
