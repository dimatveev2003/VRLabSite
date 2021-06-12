import Block from "../base/Block";
import * as React from "react";
import BlockName from "core/enum/BlockName";

export const OfferBlock = (props: React.PropsWithChildren<BaseBlockProps>) => (
	<Block isMainBlock block={BlockName.offer} {...props}>
		{props.children}
	</Block>
);

export const LandingImgBlock = (props: React.PropsWithChildren<BaseBlockProps>) => (
	<Block isMainBlock block={BlockName.landingImg} {...props}>
		{props.children}
	</Block>
);

export const MainAboutBlock = (props: React.PropsWithChildren<BaseBlockProps>) => (
	<Block isMainBlock block={BlockName.mainAbout} {...props}>
		{props.children}
	</Block>
);

export const MainServicesBlock = (props: React.PropsWithChildren<BaseBlockProps>) => (
	<Block isMainBlock block={BlockName.mainServices} {...props}>
		{props.children}
	</Block>
);

export const LoginBlock = (props: BaseBlockProps) => (
	<Block isMainBlock block={BlockName.loginPage} {...props}>
		{props.children}
	</Block>
);

export const RegistrationBlock = (props: BaseBlockProps) => (
	<Block isMainBlock block={BlockName.registrationPage} {...props}>
		{props.children}
	</Block>
);
