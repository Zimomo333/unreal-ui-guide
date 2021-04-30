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
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Radio 单选框', link: '/components/radio' },
          { text: 'Checkbox 多选框', link: '/components/checkbox' },
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'InputNumber 计数器', link: '/components/input-number' },
          { text: 'Select 选择器', link: '/components/select' },
          { text: 'Switch 开关', link: '/components/switch' },
          { text: 'Slider 滑块', link: '/components/slider' },
          { text: 'TimePicker 时间选择器', link: '/components/time-picker' },
          { text: 'TimeSelect 时间选择器', link: '/components/time-select' },
          { text: 'DatePicker 日期选择器', link: '/components/date-picker' },
          { text: 'Table 表格', link: '/components/table' },
          { text: 'Tag 标签', link: '/components/tag' },
          { text: 'Progress 进度条', link: '/components/progress' },
          { text: 'Pagination 分页', link: '/components/pagination' },
          { text: 'Message 消息提示', link: '/components/message' },
          { text: 'MessageBox 弹框', link: '/components/message-box' },
          { text: 'Notification 通知', link: '/components/notification' },
          { text: 'Tabs 标签页', link: '/components/tabs' },
          { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
          { text: 'Dialog 模态框', link: '/components/dialog' },
          { text: 'Tooltip 气泡提示', link: '/components/tooltip' },
          { text: 'Carousel 走马灯', link: '/components/carousel' },
        ]
      },
      {
        text: '扩展',
        children: [
          { text: '数据可视化', link: '/extend/' },
        ]
      }
    ],
  }
}