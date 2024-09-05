module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "./components",
            "@screens": "./screens",
            "@utils": "./utils",
            "@styles": "./styles",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
