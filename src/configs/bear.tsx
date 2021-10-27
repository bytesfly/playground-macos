import { GoRepo } from "react-icons/go";

import { BearData } from "../types";

const bear: BearData[] = [
  {
    id: "readme",
    title: "说明",
    icon: <GoRepo />,
    md: [
      {
        id: "about-me",
        title: " 关于我",
        file: "markdown/about-me.md",
        excerpt: "互联网是有记忆的，我想留下一些成长的脚印"
      },
      {
        id: "about-site",
        title: " 关于本站",
        file: "markdown/about-site.md",
        excerpt: "站点托管在Github Pages"
      }
    ]
  }
];

export default bear;
