const STAND = process.env.STAND || "local";
const path = require("path");
const webpack = require("webpack");

/**@type {IAppConfig} */
const appConfig = require(`./configurations/appConfig.${STAND}.json`);
console.log(appConfig);

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "src/sass")]
	},
	plugins: [
		new webpack.DefinePlugin({
			WEBPACK__APP_CONFIG: JSON.stringify(appConfig.appSettings),
			WEBPACK__BUILD_APP_CONFIG: JSON.stringify(appConfig.buildSettings),
			WEBPACK__APP_APIENDPOINT: JSON.stringify(appConfig.buildSettings.api.apiEndpoint)
		})
	]
};
