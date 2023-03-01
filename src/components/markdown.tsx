import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const convert = (markdown: string) => {
    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdown}
        </ReactMarkdown>
    )
}