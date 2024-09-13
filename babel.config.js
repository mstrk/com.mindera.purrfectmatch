module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "~/api": "./src/api",
          "~/assets": "./src/assets",
          "~/components": "./src/components",
          "~/navigation": "./src/navigation",
          "~/screens": "./src/screens",
          "~/store": "./src/store",
        },
      },
    ],
  ],
};
