const prettierConfig = require('./.prettierrc.json');

module.exports = {
	settings: {
		'import/resolver': {
			'node': {
				'paths': ['./', './src']
			}
		},
	},
	extends: [
		'react-app',
		'react-app/jest',
		'airbnb',
		'airbnb/hooks',
		'plugin:prettier/recommended',
	],
	ignorePatterns: [
		'.eslintrc.js',
	],
	plugins: ['react', 'jest'],
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	rules: {
		'linebreak-style': 0,
		quotes: [2, 'single', 'avoid-escape'],
		'react/jsx-uses-react': 0,
		'react/react-in-jsx-scope': 0,
		'react/no-unused-prop-types': 0,
		'react/require-default-props': 0,
		'react/jsx-props-no-spreading': 0,
		'prettier/prettier': ['error', prettierConfig],
		'import/no-extraneous-dependencies': 0,
		'no-plusplus': 0,
		'jsx-a11y/label-has-associated-control': [
			2,
			{
				labelComponents: ['Label'],
				labelAttributes: ['label'],
				controlComponents: ['Input'],
				depth: 3,
			},
		],
		'import/order': 0,
		'react/no-array-index-key': 0,
		'react/prop-types': 0,
		'no-underscore-dangle': 0,
		'no-void': [
			2,
			{
				allowAsStatement: true,
			},
		],
		'lines-between-class-members': [
			'error',
			'always',
			{ exceptAfterSingleLine: true },
		],
		'class-methods-use-this': 0,
		'no-nested-ternary': 0,
		// "import/no-unresolved": 0,

		// TODO fix
		'consistent-return': 0,
	},
};
