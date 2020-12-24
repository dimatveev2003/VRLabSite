import classNames from "classnames";

export function getBaseClassName(props: BaseBlockProps) {
	if (!props.element) {
		return `${props.block}`;
	}

	return `${props.block}__${props.element}`;
}

export function getModifierClasses(baseClass: string, modifier: string | string[]) {
	if (Array.isArray(modifier) && modifier.length > 0) {
		const modifierClasses = modifier.map((item) => `${baseClass}_${item}`);

		return modifierClasses.join(" ");
	}

	return !!modifier ? `${baseClass}_${modifier}` : "";
}

export function getBlockStyle(props: BaseBlockProps) {
	const baseClass = getBaseClassName(props);
	const modifierClasses = getModifierClasses(baseClass, props.modifier);

	const classes = classNames({
		[`${baseClass}`]: props.isMainBlock,
		[`${props.externalClass}`]: !!props.externalClass,
		[`${modifierClasses}`]: !!modifierClasses
	});

	return classes;
}
