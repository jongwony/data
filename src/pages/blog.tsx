import { useState, useEffect, createContext } from "react"

import RetrieveLists from "@/components/post_lists"
import TopNav from "@/components/gnb"
import GitHubContent from "@/components/post_contents"

const base_url = 'https://9e240d7v0k.execute-api.ap-northeast-2.amazonaws.com/api'

const postList = async () => {
    const url = base_url + '/pages/posts'
    const response = await fetch(url, {
        headers: { 'content-type': 'application/json' },
        method: 'GET',
        mode: "cors",
    })
    return response.json()
}

export const urlContext = createContext('')

export default function BlogMain() {
    const [data, setData] = useState([])
    const [url, setUrl] = useState('')

    useEffect(() => {
        // Update the document title using the browser API
        const fetchData = async () => {
            setData(await postList())
        }
        fetchData().catch(console.error)
    }, []);

    return (
        <div>
            <TopNav />
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
                <urlContext.Provider value={url}>
                    <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
                        <RetrieveLists>
                            {data.map((x) => (
                                <button key={x['name']} onClick={() => setUrl(x['download_url'])}
                                    className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" >
                                    {x['name']}
                                </button>
                            ))}
                        </ RetrieveLists>
                    </div>
                    <div className="lg:pl-[19.5rem]">
                        <GitHubContent />
                    </div>
                </urlContext.Provider>
            </div>
        </div>
    )
}