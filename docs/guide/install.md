# 安装

## npm 安装

```shell
npm install unreal-ui-next --save
```

## yarn安装

```shell
yarn add unreal-ui-next
```

<br>

# 引入 UnrealUI

你可以引入整个 UnrealUI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 UnrealUI。

## 完整引入

在 main.js 中写入以下内容：

```javascript
import { createApp } from 'vue'
import UnrealUI from 'unreal-ui-next'
import 'unreal-ui-next/lib/ur-index/style.css'
import App from './App.vue';

const app = createApp(App)
app.use(UnrealUI)
app.mount('#app')
```

以上代码便完成了 UnrealUI 的引入。需要注意的是，样式文件需要单独引入。

## 按需引入

**Vue CLI**

借助 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-import:

```bash
npm install babel-plugin-import -D
```

或者

```bash
yarn add babel-plugin-import -D
```

然后，将 babel.config.js 修改为：

- 引入 `.css` 样式

```js
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: 'unreal-ui-next',
        customStyleName: (name) => {
          return `unreal-ui-next/lib/${name}/style.css`;
        },
      },
    ],
  ],
};
```

**Vite**

首先，安装 [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import):

```bash
$ npm install vite-plugin-style-import -D
```

或者

```bash
$ yarn add vite-plugin-style-import -D
```

然后，将 vite.config.js 修改为：

- 引入 `.css` 样式

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'unreal-ui-next',
          resolveStyle: (name) => {
            return `unreal-ui-next/lib/${name}/style.css`;
          },
          resolveComponent: (name) => {
            return `unreal-ui-next/lib/${name}`;
          },
        }
      ]
    })
  ]
})
```

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import { createApp } from 'vue'
import { UrButton, UrSelect } from 'unreal-ui-next'
import App from './App.vue'

const app = createApp(App)

app.use(UrButton)
app.use(UrSelect)

app.mount('#app')
```
