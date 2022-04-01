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
<script src="https://unpkg.com/tpl-web-lib@latest/dist/index.min.js"></script>
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
    "build": "run-s build:*",
    "build:source": "vite build",
    "build:type": "tsup src/index.ts --dts-only",
    "lint": "eslint src --fix --ext .ts"
  }
}
```
## TODO/Feature
* [x] pnpm
* [x] eslint
* [x] typescript
* [x] vite/rollup
* [x] tsup
* [x] build
* [x] build:dev
* [x] css/scss/less
* [x] serve
* [x] docs
* [ ] ...
