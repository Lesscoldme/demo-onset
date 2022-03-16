module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    '@tencent/eslint-config-tencent',
    '@tencent/eslint-config-tencent/ts',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "items", 
          "state"
          
        ]
      }
    ]
  }
}

