export const navbar = [
  { text: '首页', link: '/' },
  {
    text: '英语', items: [
      { text: "B 阅读", link: "/english/read/" },
      { text: "B 写作", link: "/english/write/" },
    ]
  },
  {
    text: '数学',
    items: [
      { text: "B 线性代数", link: "/math/algebra/" },
    ]
  },
  {
    text: "计算机",
    items: [
      { text: "P 计算机是怎么跑起来的", link: "/computer/how-the-computer-works/" },
      { text: "P 程序是怎样跑起来的（施工中）", link: "/computer/how-the-program-run/" },
      { text: "P 网络是怎样连接的（施工中）", link: "/computer/how-the-network-connect/" },
      { text: "A 深入理解计算机系统（施工中）", link: "/computer/computer-system-a-programmer-perspective/" },
      { text: "B Unix 编程艺术（施工中）", link: "/computer/the-art-of-unix-programming/" },
      { text: "B 编写可读代码的艺术（施工中）", link: "/computer/the-art-of-readable-code/" },
      { text: "A 计算机程序设计艺术（计划）", link: "/computer/the-art-of-computer-programming/" },
    ]
  },
  {
    text: "物理学",
    items: [
      { text: "B 费曼物理学讲义 第一卷（计划）", link: "/physics/the-feynman-lectures-on-physics-1/" },
      { text: "B 费曼物理学讲义 第二卷（计划）", link: "/physics/the-feynman-lectures-on-physics-2/" },
      { text: "B 费曼物理学讲义 第三卷（计划）", link: "/physics/the-feynman-lectures-on-physics-3/" }
    ]
  }
]
