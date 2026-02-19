module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'scope-enum': [1, 'always', ['ui', 'data', 'config', 'docs', 'ci', 'deps', 'theme']],
  },
};
