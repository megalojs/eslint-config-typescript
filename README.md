# eslint-config-typescript
eslint-config-typescript for  magolo-cli

## Install
```bash
npm i eslint @megalo/eslint-config-typescript -D
```

## Configure
If you have already configured the eslint-related webpack configuration, 
you can create a file `.eslintrc.js` in project root directory, that`s all content of file:
```js
module.exports = {
  root: true,
  extends: [
    '@megalo/typescript'
  ]
}

```

## Recommendations
We recommend using it with @megalo/cli-serve. [Click this enter to portal](https://github.com/megalojs/megalo-cli/tree/master/packages/@megalo/cli-service)
