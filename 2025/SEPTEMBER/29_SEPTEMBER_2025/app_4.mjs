// Mixing ESM & CJS in Node.js
// -In Node.js, use "type": "module" in package.json for ESM(Or use .mjs extension)
// -When using ESM, to import a CommonJS module (like lodash):Imports the whole CommonJS export as pkg, then destructures what you need.

// import { debounce } from "lodash"; // ❌ This won't work with CommonJS modules
// because ==>SyntaxError: Named export 'debounce' not found. The requested module 'lodash' is a CommonJS module, which may not support all module.exports as named exports.
// CommonJS modules can always be imported via the default export, for example using:the below example


import pkg from "lodash";// ✅ CommonJS default import
const { debounce } = pkg;
console.log(debounce);