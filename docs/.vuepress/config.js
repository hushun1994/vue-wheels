module.exports = {
  base: '/vue-wheels/',
  title: 'wheels UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    logo: '/wheels.jpg',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: 'GitHub', link: 'https://github.com/hushun1994/vue-wheels' },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: ['/install/', '/get-started/'],
      },
      {
        title: '组件',
        collapsable: false,
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
    displayAllHeaders: true,
    markdown: {
      lineNumbers: true,
    },
  },
}
