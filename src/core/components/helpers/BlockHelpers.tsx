import Block from "../base/Block";
import * as React from "react";

export const OfferBlock = (props: React.PropsWithChildren<BaseBlockProps>) => (
	<Block isMainBlock block="offer" {...props}>
		{props.children}
	</Block>
);

export const LandingImgBlock = (props: React.PropsWithChildren<BaseBlockProps>) => (
	<Block isMainBlock block="landing-img" {...props}>
		{props.children}
	</Block>
);

export const MainAboutBlock = (props: React.PropsWithChildren<BaseBlockProps>) => (
	<Block isMainBlock block="main-about" {...props}>
		{props.children}
	</Block>
);

export const MainServicesBlock = (props: React.PropsWithChildren<BaseBlockProps>) => (
	<Block isMainBlock block="main-services" {...props}>
		{props.children}
	</Block>
);
