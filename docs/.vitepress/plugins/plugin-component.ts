import MDContainer from 'markdown-it-container'
import MarkdownIt from 'markdown-it'

const instance: MarkdownIt = MarkdownIt({
    "breaks": true
})

export const PluginComponents = (md: MarkdownIt): void => {
    md.use(MDContainer, 'components', {
        validate(params: string):boolean {
            return !!params.trim().match(/^components\s*$/)
        },

        render(tokens: any[], idx: number) {
            const currentToken = tokens[idx]
            const nextToken = tokens[idx + 1]
            if (currentToken.nesting === 1) {
                let content = ''
                if (nextToken.type === 'fence' && nextToken.info === 'html') {
                    content = nextToken.content
                 }
                return `<div class="component__container"><MtStickyCard>
                    ${md.render(content)} <template #source>`
            }
            
            return "</template></MtStickyCard></div>";
        }
    })
}