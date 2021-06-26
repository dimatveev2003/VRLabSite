import React from "react";
import Popup from "reactjs-popup";
import Block from "./Block";

interface ModalPopupProps {
	isOpen: boolean;
	onClose?: () => any;
	hasCloseButton?: boolean;
	title: string;
}

const ModalPopup = (props: React.PropsWithChildren<ModalPopupProps>) => {
	const { isOpen, onClose, title, hasCloseButton } = props;

	return (
		<Popup closeOnDocumentClick={false} open={isOpen} onClose={onClose}>
			<Block externalClass="modal">
				{hasCloseButton ? (
					<a className="modal__close" onClick={onClose}>
						&times;
					</a>
				) : null}
				<p className="modal__title">{title}</p>

				<Block externalClass="modal__text">{props.children}</Block>
			</Block>
		</Popup>
	);
};

export default ModalPopup;
