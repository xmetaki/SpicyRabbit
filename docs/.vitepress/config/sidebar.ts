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
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'StickyCard 粘性卡片', link: '/components/sticky'}
        ]
      },
      {
        text: '数据组件',
        items: [
          { text: 'Input输入框', link: '/components/input'},
          { text: 'Tag标签', link: '/components/tag'},
          { text: 'Avatar头像', link: '/components/avatar'},
          { text: 'Switch开关', link: '/components/switch'},
          { text: 'TimePicker时间选择器', link: '/components/timePicker'},
          { text: 'Tree树组件', link: '/components/tree'},
        ]
      },
      {
        text: '其他',
        items: [
          { text: 'HeightTransition 高度过渡', link: '/components/height-transition'},
          { text: 'Animation指令', link: '/components/animation'}
        ]
      }
      
    ]
  }
  
  export default sidebar