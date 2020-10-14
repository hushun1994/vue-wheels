module.exports = {
  title: 'wheels UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    logo: '/hanfei.jpg',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: 'GitHub', link: 'https://github.com/hushun1994/vue-wheels' },
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/', '/get-started/'],
      },
      {
        title: '组件',
        children: [
          '/components/icon',
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tabs',
          '/components/popover',
          '/components/collapse',
        ],
      },
    ],
    // displayAllHeaders: true,
    markdown: {
      lineNumbers: true,
    },
  },
}