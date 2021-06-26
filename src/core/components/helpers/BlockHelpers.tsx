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

export const HeaderBlock = (props: BaseBlockProps) => (
	<Block isMainBlock block={BlockName.header} {...props}>
		{props.children}
	</Block>
);

export const HeaderMenuBlock = (props: BaseBlockProps) => (
	<Block isMainBlock block={BlockName.header} element="menu" {...props}>
		{props.children}
	</Block>
);

export const LabsBlock = (props: BaseBlockProps) => (
	<Block isMainBlock block={BlockName.labs} {...props}>
		{props.children}
	</Block>
);

export const LabsLabBlock = (props: BaseBlockProps) => (
	<Block block={BlockName.labs} element="lab" {...props}>
		{props.children}
	</Block>
);

export const BundleBlock = (props: BaseBlockProps) => (
	<Block block={BlockName.labs} element="bundle" {...props}>
		{props.children}
	</Block>
);

export const LayoutBlock = (props: BaseBlockProps) => (
	<Block isMainBlock block={BlockName.layout} {...props}>
		{props.children}
	</Block>
);

export const FooterBlock = (props: BaseBlockProps) => (
	<Block isMainBlock block={BlockName.footer} {...props}>
		{props.children}
	</Block>
);

export const CartBlock = (props: BaseBlockProps) => (
	<Block isMainBlock block={BlockName.cart} {...props}>
		{props.children}
	</Block>
);

export const HomeBlock = (props: BaseBlockProps) => (
	<Block isMainBlock block={BlockName.home} {...props}>
		{props.children}
	</Block>
)

export const HomeProfileBlock = (props: BaseBlockProps) => (
	<Block isMainBlock block={BlockName.home} element="profile" {...props}>
		{props.children}
	</Block>
)