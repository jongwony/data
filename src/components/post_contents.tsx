import { convert } from "./markdown";
import React, { useState, useEffect, useContext } from 'react';
import { urlContext } from "@/pages/blog";

const getContent = async (downloadUrl: string) => {
    return await fetch(downloadUrl, {
        headers: { 'content-type': 'text/plain' },
        method: 'GET',
        mode: "cors",
    })
}

export default function GitHubContent() {
    const [data, setData] = useState('')
    const url = useContext(urlContext)

    useEffect(() => {
        const fetchData = async () => {
            if (url !== undefined) {
                const response = await getContent(url)
                setData(await response.text())
            }
        }
        fetchData().catch(console.error)
    }, [url])

    return (
        <article className="prose lg:prose-xl dark:prose-invert">
            {convert(data)}
        </article>
    )
}
