const STAND = process.env.STAND || "local";
const path = require("path");

/**@type {IAppConfig} */
const appConfig = require(`./configurations/appConfig.${STAND}.json`);

module.exports = {
	env: {
		NEXT_PUBLIC_APP_CONFIG: JSON.stringify(appConfig.appSettings),
		NEXT_PUBLIC_BUILD_APP_CONFIG: JSON.stringify(appConfig.buildSettings),
		NEXT_PUBLIC_APP_APIENDPOINT: appConfig.buildSettings.api.apiEndpoint
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "src/sass")]
	}
};
