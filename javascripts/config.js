/*global System */
'use strict';

/* if you need any specific jspm config place it here */

System.config({
  transpiler: 'babel',
  packages: {
    './': {
      defaultExtension: false
    }
  },
  map: {
    "react": "https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react.min.js",
    "react-dom": "https://cdnjs.cloudflare.com/ajax/libs/react/15.0.1/react-dom.min.js",
    'css': 'npm:css',
    'amdefine': 'npm:amdefine',
    'source-map-url': 'npm:source-map-url',
    'resolve-url': 'npm:resolve-url'
  }
});
