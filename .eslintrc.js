/* eslint-disable no-undef */
module.exports = {
	"env": {
			"browser": true,
			"es6": true
	},
	"extends": [
			"eslint:recommended",
			"plugin:react/recommended"
	],
	"globals": {
			"Atomics": "readonly",
			"SharedArrayBuffer": "readonly"
	},
	"parser": "babel-eslint",
	"parserOptions": {
			"ecmaFeatures": {
					"jsx": true
			},
			"ecmaVersion": 2018,
			"sourceType": "module"
	},
	"plugins": [
			"react"
	],
	"settings": {
    "react": {
      "version": "detect"
    }
  },
	"rules": {
			"quotes": [ 2, "double" ],
			"react/prop-types": 0
	},
	"overrides": [
			{
				"files": [ "src/**/*.js" ],
				"rules": {
					"quotes": [ 2, "single" ],
					"no-unused-vars": ["error"]
				}
			}
	]  
};