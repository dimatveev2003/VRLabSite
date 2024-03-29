/** Получение UUID */
export function generateUUID(): string {
	let time = new Date().getTime();

	const result = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
		const r = (time + Math.random() * 16) % 16 | 0;

		time = Math.floor(time / 16);

		return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
	});

	return result;
}
