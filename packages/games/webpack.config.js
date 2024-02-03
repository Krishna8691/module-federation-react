const HTMLWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
	mode: "development",
	devServer: {
		port: 8082,
	},
	module: {
		rules: [
			{
				test: /\.?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							["@babel/preset-react", { runtime: "automatic" }],
						],
					},
				},
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "games",
			filename: "remoteEntry.js",
			exposes: {
				"./GamesApp": "./src/bootstrap",
			},
			shared: ["react", "react-dom"],
		}),
		new HTMLWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
