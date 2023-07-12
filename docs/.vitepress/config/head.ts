import  { HeadConfig } from "vitepress"

/**
 * TODO: 增加一些meta信息用于SEO
 * @see https://vitepress.dev/reference/site-config#head
 */
const  head:HeadConfig[] = [
    [
        'link',
        {
            rel: 'icon',
            href: '/rabbit.png'
        }
    ],
    [
        'meta',
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0,user-scalable=no'
        }
    ],
    [
      'meta',
      {
        'http-equiv': 'Content-Security-Policy',
        'content': 'upgrade-insecure-requests"'
      }
    ],
    [
        'meta',
        {
        name: 'Keywords',
        content:
            'UI组件库'
        }
    ],
  [
    'meta',
    {
      property: 'og:site_name',
      content: 'xxx'
    }
  ]
] as HeadConfig[]

export default head