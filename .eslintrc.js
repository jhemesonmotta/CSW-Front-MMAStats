const MAX_CHAR = 120;
const MAX_LINES = 100;

module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'rules': {
        'max-len': ['error', { 'code': MAX_CHAR }],
        'max-lines': ['warn', { 'max': MAX_LINES }],
        'quotes': ['error', 'single'],
    }
};
