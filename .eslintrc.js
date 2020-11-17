module.exports = {
  "extends": ["eslint:recommended"],
  "rules": {
    // "no-console":["error",{
    //   "allow": ["warn","error","info"]
    // }]
  },
  "parser": "babel-eslint",
  "parserOptions":{
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "globals": {
   "window": true,
   "document": true
  },
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  }
}
