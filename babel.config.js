const presets = ['module:metro-react-native-babel-preset']
const plugins = []

plugins.push(
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: {
        '@': './src',
      },
    },
  ],
  [
    'module:react-native-dotenv',
    {
      envName: 'APP_ENV',
      moduleName: '@env',
      path: '.env',
      safe: false,
      allowUndefined: true,
      verbose: false,
    },
  ],
  'react-native-reanimated/plugin',
)

module.exports = {
  presets,
  plugins,
}
