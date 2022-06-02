import { defineConfig } from "vite";
// import { createStyleImportPlugin } from "vite-plugin-style-import";

export default defineConfig({
    // plugins: [
    //     // 按需导入组件样式
    //     createStyleImportPlugin({
    //         libs: [
    //             {
    //                 libraryName: "unreal-ui-next",
    //                 resolveStyle: (name) => {
    //                     return `unreal-ui-next/lib/${name}/style.css`;
    //                 },
    //                 // resolveComponent: (name) => {
    //                 //     // 必须，否则按需导入时有Bug
    //                 //     return `unreal-ui-next/lib/${name}`;
    //                 // },
    //             },
    //         ],
    //     }),
    // ],
});
