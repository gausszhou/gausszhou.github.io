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
      {
        text: "经典书籍",
        items: [
          { text: "P 计算机是怎么跑起来的", link: "/computer/book/how-the-computer-works/" },
          { text: "P 程序是怎样跑起来的（施工中）", link: "/computer/book/how-the-program-run/" },
          { text: "P 网络是怎样连接的（施工中）", link: "/computer/book/how-the-network-connect/" },
          // 
          { text: "A 深入理解计算机系统（施工中）", link: "/computer/book/computer-system-a-programmer-perspective/" },
          // 
          { text: "B Unix 编程艺术（施工中）", link: "/computer/book/the-art-of-unix-programming/" },
          { text: "B 编写可读代码的艺术（施工中）", link: "/computer/book/the-art-of-readable-code/" },
          { text: "A 计算机程序设计艺术（计划）", link: "/computer/book/the-art-of-computer-programming/" },
        ]
      },
      {
        text: "数据结构和算法",
        items: [
          { text: "B 数据结构 基本数据结构", link: "/computer/data-structure/basic/" },
          { text: "B 数据结构 高级数据结构（计划）", link: "/computer/data-structure/advance/" },
          { text: "B 算法 理论基础", link: "/computer/algorithm/basic/" },
          { text: "B 算法 力扣初级", link: "/computer/algorithm/easy/" },
          { text: "A 算法 力扣中级（施工中）", link: "/computer/algorithm/medium/" },
          { text: "A 算法 力扣高级（施工中）", link: "/computer/algorithm/hard/" }
        ]
      },
      {
        text: "软考综合",
        items: [
          { text: "B 软考综合 软件设计师", link: "/computer/ruankao/software-designer/" },
          { text: "B 软考综合 系统架构师", link: "/computer/ruankao/system-architech/" }
        ]
      },
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
