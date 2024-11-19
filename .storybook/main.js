// import path from 'path';

// const config = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//   addons: [
//     "@storybook/addon-onboarding",
//     "@storybook/addon-essentials",
//     "@chromatic-com/storybook",
//     "@storybook/addon-interactions",
//     "@storybook/preset-scss"
//   ],
//   framework: "@storybook/react-webpack5",
//   webpackFinal: async (config) => {
//     // Настройка alias
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': path.resolve(__dirname, '../src')
//     };

//     // Конфигурация SCSS модулей
//     // config.module.rules.push({
//     //   test: /\.module\.(s[ac]ss|css)$/,
//     //   use: [
//     //     'style-loader',
//     //     {
//     //       loader: 'css-loader',
//     //       options: {
//     //         modules: {
//     //           auto: true,
//     //           localIdentName: '[name]__[local]__[hash:base64:5]',
//     //         },
//     //         sourceMap: true,
//     //       },
//     //     },
//     //     {
//     //       loader: 'sass-loader',
//     //       options: {
//     //         additionalData: `@import "D:/Modsen-internship/client-blog-ui-kit2/src/core/styles/variables.scss";`
//     //       },
//     //     },
//     //   ],
//     // });

//     // // Конфигурация для обычных SCSS файлов
//     // config.module.rules.push({
//     //   test: /\.(s[ac]ss|css)$/,
//     //   exclude: /\.module\.(s[ac]ss|css)$/,
//     //   use: [
//     //     'style-loader',
//     //     'css-loader',
//     //     {
//     //       loader: 'sass-loader',
//     //       options: {
//     //         additionalData: `@import "D:/Modsen-internship/client-blog-ui-kit2/src/core/styles/variables.scss";`
//     //       },
//     //     },
//     //   ],
//     // });

//     // Babel конфигурация
//     config.module.rules.push({
//       test: /\.(js|jsx|ts|tsx)$/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: [
//             '@babel/preset-env',
//             '@babel/preset-typescript',
//             ['@babel/preset-react', { runtime: 'automatic' }],
//           ],
//         },
//       },
//     });

//     config.resolve.extensions.push('.ts', '.tsx');
//     return config;
//   },
// };

// export default config;

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
  ],

  webpackFinal: (config) => {
    config.resolve.modules = [...(config.resolve.modules || []), "./src"];
    config.module.rules = [
      ...(config.module.rules || []),
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        type: "javascript/auto",
        use: [{loader: '@svgr/webpack', options: {icon: true}}, 'url-loader'],
      },
    ];
  
    return config;
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

