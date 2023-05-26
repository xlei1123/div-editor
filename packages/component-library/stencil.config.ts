import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'div-editor',
  globalStyle: './src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    reactOutputTarget({
      componentCorePackage: 'component-library',
      proxiesFile: '../component-library-react/src/components.ts'
    }),
    vueOutputTarget({
      componentCorePackage: 'component-library',
      proxiesFile: '../component-library-vue/src/components.ts',
    }),
    { 
      type: 'docs-readme',
      footer: '*Built with love!*',
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
