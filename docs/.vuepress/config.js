module.exports = {
  title: 'Tyy Blog',
  description: '一只前端小白',
  dest: 'dist',
  locales: { '/': { lang: 'zh-cmn-Hans' } },
  head: [
    ['link', { rel: 'icon', href: '/icons/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#000000' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],

  theme: 'reco',
  themeConfig: {
    type: 'blog',
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/tyysun',
            icon: 'reco-github',
          },
          // {
          //   text: '知乎',
          //   link: 'https://www.zhihu.com/people/danranVm',
          //   icon: 'reco-zhihu',
          // },
          // {
          //   text: '微信',
          //   link:
          //     'https://cdn.jsdelivr.net/gh/danranvm/image-hosting/images/mmqrcode1575827186558.png',
          //   icon: 'reco-wechat',
          // },
        ],
      },
    ],
    friendLink: [
      // {
      //   title: '午后南杂',
      //   desc: 'Enjoy when you can, and endure when you must.',
      //   email: 'recoluan@qq.com',
      //   link: 'https://www.recoluan.com',
      // },
      // {
      //   title: '有梦想的咸鱼',
      //   desc: '我不能克制我记几',
      //   link: 'https://blog.liudongyang.top',
      //   email: '',
      //   logo: 'https://blog.liudongyang.top/blog-logo.jpg',
      // },
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category', // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag', // 默认 “标签”
      },
    },
    logo: '/images/head.JPG',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '上次更新',
    // 作者
    author: 'tyysun',
    // 项目开始时间
    startYear: '2019',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    // valineConfig: {
    //   appId: 'vfrUFUJkmotIMbDPCakpr0Ek-gzGzoHsz', // your appId
    //   appKey: 'WygRSyMF3sroGszrCs23ACLe',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   notify: true,
    //   recordIP: true,
    //   hideListAccessNumber: true,
    // },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-125817360-1',
      },
    ],
  ],
  // evergreen: true
}
