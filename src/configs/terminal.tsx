import { TerminalData } from "../types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-me",
        title: "me.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              2018年本科毕业于某211大学软件工程专业，在上海工作两年半时间，回家乡合肥工作至今。
            </div>
            <div className="mt-1">
              互联网是有记忆的，我想留下一些成长的脚印。
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "微服务 / 大数据 / 机器学习 / 深度学习 / 有挑战的工作"
      },
      {
        id: "about-languages",
        title: "languages.txt",
        type: "file",
        content: "Java / Python / Scala / Golang"
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:bytesfly@foxmail.com"
                target="_blank"
                rel="noreferrer"
              >
                bytesfly@foxmail.com
              </a>{" "}
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/bytesfly"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/bytesfly
              </a>
            </li>
            <li>
              Blog:{" "}
              <a
                className="text-blue-300"
                href="https://www.cnblogs.com/bytesfly/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.cnblogs.com/bytesfly/
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "MyDream.java",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span> (
          <span className="text-blue-400">working</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span className="text-blue-400 ml-9">hapiness</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
