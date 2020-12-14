const STAND = process.env.STAND || "local";

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {IAppConfig} */
const appConfig = require(`./configurations/appConfig.${STAND}.json`);

const srcPath = path.resolve(__dirname, "./src");
const dstPath = path.resolve(__dirname, "./build");
const nodeModulesPath = path.resolve(__dirname, "node_modules");

module.exports = {
	context: srcPath,

	entry: "./app.tsx", // входная точка - исходный файл
	output: {
		path: dstPath, // путь к каталогу выходных файлов - папка public
		publicPath: "/build/",
		filename: "js/[name]_[hash].js", // название создаваемого файла
		chunkFilename: "js/[id]_[hash].chunk.js",
		devtoolFallbackModuleFilenameTemplate: "[absolute-resource-path]",
		devtoolModuleFilenameTemplate: "[absolute-resource-path]",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: {
					plugins: ["transform-object-assign", "array-includes", "@babel/plugin-proposal-class-properties"],
					presets: ["@babel/preset-react", "@babel/preset-env"],
				},
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(jpeg|jpg|gif|png|svg|ttf|eot|woff|woff2|ico)$/,
				loader: "file-loader",
				options: {
					name: "[path][name].[ext]",
					context: srcPath,
				},
			},
			{
				test: /\.(css|scss)$/,
				include: [srcPath, nodeModulesPath],
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: appConfig.buildSettings.options.maps,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							sourceMap: appConfig.buildSettings.options.maps,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: appConfig.buildSettings.options.maps,
						},
					},
				],
			},
		],
	},
};
