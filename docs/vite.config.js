import { defineConfig } from "vite";
// import styleImport from "vite-plugin-style-import";

export default defineConfig({
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
        },
    },
    // plugins: [
    //     // 按需导入组件样式
    //     // styleImport({
    //     //     libs: [
    //     //         {
    //     //             libraryName: "unreal-ui-next",
    //     //             resolveStyle: (name) => {
    //     //                 return `unreal-ui-next/lib/${name}/style.css`;
    //     //             },
    //     //             resolveComponent: (name) => {
    //     //                 return `unreal-ui-next/lib/${name}`;
    //     //             },
    //     //         },
    //     //     ],
    //     // }),
    // ],
});
