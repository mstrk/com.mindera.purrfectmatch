module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "~/assets": "./src/assets",
          "~/components": "./src/components",
        },
      },
    ],
  ],
};
