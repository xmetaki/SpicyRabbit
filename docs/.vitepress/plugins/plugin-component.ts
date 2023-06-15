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
            if (tokens[idx].nesting === 1) {
                return `<MtButton>`
            }
            return "</MtButton>";
        }
    })
}