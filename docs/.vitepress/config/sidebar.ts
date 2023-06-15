/**
 * 侧边栏菜单
 *
 */
const sidebar = {
    '/docs/': [
      {
        text: '开发指南',
        items: [
          { text: '安装', link: '/docs/install' },
          { text: '快速上手', link: '/docs/import' }
        ]
      },
      {
        text: '指南',
        items: [
          { text: '贡献指南', link: '/docs/contributing' },
          { text: '加入我们', link: '/docs/join' }
        ]
      },
      {
        text: '历程',
        items: [
          { text: '里程碑', link: '/docs/milepost' }
        ]
      }
    ],
    '/components/': [
      {
        text: '基础组件',
        items: [
          { text: 'Button 按钮', link: '/components/button' }
        ]
      }
    ]
  }
  
  export default sidebar