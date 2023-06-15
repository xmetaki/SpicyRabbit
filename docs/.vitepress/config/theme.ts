import { DefaultTheme } from "vitepress"
import sidebar from "./sidebar"
import nav from './nav'
const theme: DefaultTheme.Config = {
    'lastUpdatedText': '最后更新的时间',
    'socialLinks':[
        {
            'link': 'https://github.com/xmetaki',
            'icon': 'github'
        },
        {
            'icon': 'discord',
            'link': 'https://discord.gg/cPBjDmqEJA'
        }
    ],
    'logo': '/rabbit.png',
    'siteTitle': 'SpicyRabbit',
    nav,
    sidebar,
}

export default theme