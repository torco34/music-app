/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {
    // Otras configuraciones...

    boot: [
      'pinia', // Aquí registramos el archivo de boot para Pinia
    ],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
    css: [
      'app.scss'
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20',
      },
      vueRouterMode: 'hash', // puedes usar 'history' o 'hash'
      publicPath: '/music-app/', // Ajusta este valor si es necesario

      // Puedes ajustar otros parámetros del build según tu necesidad
      vitePlugins: [
        ['vite-plugin-checker', {
          eslint: {
            lintCommand: 'eslint "./**/*.{js,mjs,cjs,vue}"'
          }
        }, { server: false }]
      ]
    },

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
    devServer: {
      open: true // abre la ventana del navegador automáticamente
    },

    // framework, plugins, y otras configuraciones
    framework: {
      config: {},
      plugins: []
    },

    // Otras configuraciones como SSR, PWA, etc.

    ssr: {
      prodPort: 3000,
      middlewares: ['render'] // mantener esto como el último middleware
    },

    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
    },

    // Configuraciones de Electron, Cordova, Capacitor, etc.
    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'soundapp'
      }
    }
  };
});
