module.exports = {
  title: 'UnrealUI',
  themeConfig: {
    repo: 'https://github.com/Zimomo333/unreal-ui-next',
    docsRepo: 'https://github.com/Zimomo333/unreal-ui-guide',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    sidebar: [
      {
        text: '使用指南',
        children: [
          { text: '简介', link: '/' },
          { text: '安装引入', link: '/guide/install' },
        ]
      },
      {
        text: '组件',
        children: [
          { text: '按钮 Button', link: '/components/button' },
          { text: '单选框 Radio', link: '/components/radio' },
          { text: '多选框 Checkbox', link: '/components/checkbox' },
          { text: '输入框 Input', link: '/components/input' },
          { text: '计数器 InputNumber', link: '/components/input-number' },
          { text: '选择器 Select', link: '/components/select' },
          { text: '开关 Switch', link: '/components/switch' },
          { text: '滑块 Slider', link: '/components/slider' },
          { text: '时间选择器 TimePicker', link: '/components/time-picker' },
          { text: '时间选择器 TimeSelect', link: '/components/time-select' },
          { text: '日期选择器 DatePicker', link: '/components/date-picker' },
          { text: '表格 Table', link: '/components/table' },
          { text: '标签 Tag', link: '/components/tag' },
          { text: '进度条 Progress', link: '/components/progress' },
          { text: '分页 Pagination', link: '/components/pagination' },
          { text: '消息提示 Message', link: '/components/message' },
          { text: '弹框 MessageBox', link: '/components/message-box' },
          { text: '通知 Notification', link: '/components/notification' },
          { text: '标签页 Tabs', link: '/components/tabs' },
          { text: '面包屑 Breadcrumb', link: '/components/breadcrumb' },
          { text: '模态框 Dialog', link: '/components/dialog' },
          { text: '气泡提示 Tooltip', link: '/components/tooltip' },
          { text: '走马灯 Carousel', link: '/components/carousel' },
        ]
      },
      {
        text: '数据可视化',
        children: [
          { text: '柱状图', link: '/chart/bar-chart' },
        ]
      }
    ],
  }
}