var jsdom = require('jsdom');

// Simulating a server-side rendered component
// This was obtained via React.renderToString()
// Store this DOM and the window in global scope ready for React to access
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window    = document.defaultView
global.navigator = window.navigator
