module.exports = {
  title: 'UnrealUI',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/Zimomo333/unreal-ui-next' },
    ],
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
          { text: 'DateTimePicker 日期时间选择器', link: '/components/date-time-picker' },
          { text: 'Table 表格', link: '/components/table' },
          { text: 'Tag 标签', link: '/components/tag' },
          { text: 'Progress 进度条', link: '/components/progress' },
          { text: 'Pagination 分页', link: '/components/pagination' },
          { text: 'Message 消息提示', link: '/components/message' },
          { text: 'MessageBox 弹框', link: '/components/message-box' },
          { text: 'Notification 通知', link: '/components/notification' },
          { text: 'Tabs 标签页', link: '/components/tabs' },
          { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
          { text: 'Dialog 对话框', link: '/components/dialog' },
          { text: 'Tooltip 文字提示', link: '/components/tooltip' },
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