import { convert } from "./markdown";
import React, { useState, useEffect } from 'react';

const getContent = async (downloadUrl: string) => {
    return await fetch(downloadUrl, {
        headers: { 'content-type': 'text/plain' },
        method: 'GET',
        mode: "cors",
    })
}

type GitHubProps = {
    downloadUrl: string
}

export default function GitHubContent({downloadUrl}: GitHubProps) {
    const [data, setData] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await getContent(downloadUrl)
            setData(await response.text())
        }
        fetchData().catch(console.error)
    }, [])

    return (
        <article className="prose lg:prose-xl dark:prose-invert">
            {convert(data)}
        </article>
    )
}
