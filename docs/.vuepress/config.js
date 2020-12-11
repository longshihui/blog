module.exports = {
  title: "Colorless的博客",
  description: "Just playing around",
  theme: "reco",
  themeConfig: {
    authorAvatar: "/author.jpeg",
    modePicker: true,
    noFoundPageByTencent: false,
    type: "blog",
    valineConfig: {
      showComment: false,
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "Github", link: "https://github.com/longshihui/blog", target: '_blank' },
    ]
  },
};
