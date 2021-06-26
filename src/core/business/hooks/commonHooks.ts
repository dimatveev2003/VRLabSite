import AppContextProvider from "core/components/context/AppContextProvider";
import React from "react";
import { useSelector as useOriginSelector, useDispatch as useOriginDispatch } from "react-redux";

export function useAppContextProvider() {
	const result = React.useContext(AppContextProvider);

	return result;
}

export const useAppContext = () => {
	const context = React.useContext(AppContextProvider);
	const result = context.context;

	return result;
};

export const useAppConfig = () => {
	const context = React.useContext(AppContextProvider);
	const result = context.context.config;

	return result;
};

/**
 * Обертка над хуком селектора для использования селектора в качестве зависимостей в хуках
 * @param selector селектор
 * @param equalityFn функция сравнения
 */
export const useSelector = <TSelected>(
	selector: (state: IGlobalAppState) => TSelected,
	equalityFn?: (left: TSelected, right: TSelected) => boolean
) => useOriginSelector<IGlobalAppState, TSelected>(selector, equalityFn);

/**
 * Обертка над хуком диспатча для использования диспатча в качестве зависимостей в хуках
 */
export const useDispatch = () => useOriginDispatch();
