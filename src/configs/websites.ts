import { WebsitesData } from "../types";

const websites: WebsitesData = {
  favorites: {
    title: "快速访问",
    sites: [
      {
        id: "my-github",
        title: "字节飞扬",
        img: "https://cdn.jsdelivr.net/gh/wugenqiang/StaticRepo/images/icon.png",
        link: "https://bytesfly.github.io/blog",
        inner: true
      },
      {
        id: "my-blog",
        title: "博客园",
        img: "https://img2020.cnblogs.com/blog/1546632/202109/1546632-20210916125244772-353101483.png",
        link: "https://www.cnblogs.com/bytesfly/"
      }
    ]
  },
  freq: {
    title: "最近访问",
    sites: [
      {
        id: "deepL",
        title: "DeepL翻译",
        img: "https://static.deepl.com/img/logo/DeepL_Logo_darkBlue_v2.svg",
        link: "https://www.deepl.com/translator"
      },
      {
        id: "zhihu",
        title: "知乎",
        img: "img/sites/zhihu.jpeg",
        link: "https://www.zhihu.com/"
      },
      {
        id: "bilibili",
        title: "Bilibili",
        img: "img/sites/bilibili.svg",
        link: "https://www.bilibili.com/"
      },
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "dribbble",
        title: "Dribbble",
        img: "img/sites/dribbble.svg",
        link: "https://dribbble.com/"
      },
      {
        id: "arxiv",
        title: "arXiv",
        img: "img/sites/arxiv.png",
        link: "https://arxiv.org/"
      },
      {
        id: "gmail",
        title: "Gmail",
        img: "img/sites/gmail.svg",
        link: "https://mail.google.com/"
      },
      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode-cn.com/"
      },
      {
        id: "v2ex",
        title: "V2EX",
        img: "https://www.v2ex.com/apple-touch-icon.png",
        link: "https://www.v2ex.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "hacker-news",
        title: "Hacker News",
        img: "img/sites/hacker.svg",
        link: "https://news.ycombinator.com/"
      },
      {
        id: "astral",
        title: "Astral",
        img: "img/sites/astral.svg",
        link: "https://app.astralapp.com/"
      },
      {
        id: "gitee",
        title: "Gitee",
        // img: "https://gitee.com/static/images/logo-en.svg",
        img: "img/sites/gitee.svg",
        link: "https://gitee.com/"
      },
      {
        id: "aideadline",
        title: "AI Deadlines",
        img: "https://aideadlin.es/static/img/favicon.png",
        link: "https://aideadlin.es/",
        inner: true
      },
      {
        id: "nazo",
        title: "Nazo",
        link: "https://nazo.one-story.cn"
      },
      {
        id: "svgomg",
        title: "SVGOMG",
        img: "https://jakearchibald.github.io/svgomg/imgs/icon.png",
        link: "https://jakearchibald.github.io/svgomg/"
      },
      {
        id: "oh-vue-icons",
        title: "Vue Icons!",
        img: "img/sites/oh-vue-icons.svg",
        link: "https://oh-vue-icons.netlify.app/"
      },
      {
        id: "tiny-png",
        title: "Tiny PNG",
        img: "https://tinypng.com/images/panda-chewing-2x.png",
        link: "https://tinypng.com/"
      }
    ]
  }
};

export default websites;
