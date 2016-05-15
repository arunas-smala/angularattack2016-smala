/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/+template-editor',
  'app/+drag-n-drop',
  'app/+drag-n-drop/template',
  'app/+drag-n-drop/sidebar',
  'app/+template-editor/shared/codemirror',
  'app/+drag-n-drop/sidebar/edit/input',
  'app/+drag-n-drop/sidebar/edit/number',
  'app/+drag-n-drop/sidebar/edit/abstract',
  'app/+drag-n-drop/sidebar/edit/image',
  'app/+drag-n-drop/sidebar/edit/select',
  'app/+drag-n-drop/sidebar/edit/checkbox',
  'app/+drag-n-drop/sidebar/edit/radio',
  'app/+drag-n-drop/sidebar/edit/link',
  'app/+drag-n-drop/sidebar/edit/date',
  'app/+drag-n-drop/sidebar/edit/mobile',
  'app/+drag-n-drop/sidebar/edit/textarea',
  'app/+drag-n-drop/sidebar/edit/color',
  'app/+drag-n-drop/sidebar/edit/input-stops',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

/** Type declaration for ambient System. */
declare var CodeMirror: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    'moment': 'vendor/moment/moment.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
