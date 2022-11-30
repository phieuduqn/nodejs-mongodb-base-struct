# Config ESLint, Prettier

```shell
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-security@latest @typescript-eslint/eslint-plugin @typescript-eslint/parser
yarn add -D pre-commit

yarn format
```
# Auto Format Setting 
```javascript
    "editor.codeActionsOnSave": {
        // For ESLint
        "source.fixAll.eslint": true,
        // For TSLint
        "source.fixAll.tslint": true,
        // For Stylelint
        "source.fixAll.stylelint": true
    },
```

# Install
`yarn`
# Development
`yarn dev`
# Seeders
Create file and write your update data code in seeders folder.
`yarn seed`