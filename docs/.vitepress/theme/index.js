import DefaultTheme from 'vitepress/theme'
import './style.css'
import UnrealUI from 'unreal-ui-next'
import 'unreal-ui-next/lib/ur-index/style.css'
// import { UrButton } from 'unreal-ui-next' // 按需导入

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(UnrealUI);
    // app.use(UrButton);
  },
}
