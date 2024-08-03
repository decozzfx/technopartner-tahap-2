const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

module.exports = function (baseConfig) {
  const defaultConfig = mergeConfig(baseConfig, getDefaultConfig(__dirname));
  const {
    resolver: { assetExts, sourceExts },
  } = defaultConfig;

  return mergeConfig(defaultConfig, {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
      resolveRequest: (context, realModuleName, platform, moduleName) => {
        let module = realModuleName;
        if (realModuleName.includes("@tanstack/react-location")) {
          module = module.replace(
            "@tanstack/react-location",
            "@tanstack/react-location/build/cjs"
          );
        }
        const { resolveRequest: removed, ...restContext } = context;
        return require("metro-resolver").resolve(restContext, module, platform);
      },
    },
  });
};
