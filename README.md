# Web SDK/Library Template Project
开箱即用的Web SDK/Library 工程模板

[搭建文章链接](https://sugarat.top/technology/tpl/web-sdk-tpl.html#%E5%89%8D%E8%A8%80)
## Usage
will add a tag to your page center

![图片](https://img.cdn.sugarat.top/mdImg/MTYzMzg1NDMyNjkzNw==633854326937)

### NPM
```sh
# npm
npm i tpl-web-lib

# yarn
yarn add tpl-web-lib

# pnpm
pnpm add tpl-web-lib
```

```ts
import libName from 'tpl-web-lib'
new libName()
```
### CDN
add script in html template
```html
<script src="https://unpkg.com/tpl-web-lib@0.0.2/dist/index.min.js"></script>
<script>
    new LibName()
</script>
```

### Get Source
1. fork
2. clone
3. use this template
### Command
```json
{
  "scripts": {
    "serve": "vite",
    "build:dev": "vite build -w",
    "build": "rimraf dist && vite build && npm run roll-types",
    "roll-types": "api-extractor run && npm run rm-temp-types",
    "rm-temp-types": "rimraf dist/lib dist/types dist/constants",
    "lint": "eslint src --fix --ext .ts"
  }
}
```
## TODO/Feature
* [x] pnpm
* [x] eslint
* [x] typescript
* [x] vite/rollup
* [x] api-extractor
* [x] build
* [x] build:dev
* [x] css/scss/less
* [x] serve
* [x] docs
* [ ] ...
