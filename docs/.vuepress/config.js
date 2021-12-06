module.exports = {
  base: '/blog/',
  title: "Colorless的博客",
  description: "Just playing around",
  theme: "reco",
  themeConfig: {
    authorAvatar: "/author.jpeg",
    subSidebar: 'auto',
    modePicker: true,
    noFoundPageByTencent: false,
    type: "blog",
    nav: [
      { text: "首页", link: "/" },
      { text: "Github", link: "https://github.com/longshihui/blog", target: '_blank' },
    ]
  },
  plugins: ['@vuepress/medium-zoom']
};
