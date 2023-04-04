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
    const [item, setItem] = useState(Object)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        // Update the document title using the browser API
        const fetchData = async () => {
            const posts = await postList()
            posts.reverse()
            setData(posts)
            setItem(posts.at(0))
        }
        fetchData().catch(console.error)
    }, []);

    return (
        <div>
            <TopNav />
            <urlContext.Provider value={item['download_url']}>
                <div className="sticky flex lg:hidden top-[3.4rem] p-4 border-b backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
                    <button type="button" className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                        onClick={toggleDropdown}
                    >
                        <svg width="24" height="24"><path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                    </button>
                    <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
                        <li className="flex items-center">
                            {item['name']}
                            <svg width="3" height="6" aria-hidden="true" className="mx-3 overflow-visible text-slate-400"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                        </li>
                        <li className="font-semibold text-slate-900 truncate dark:text-slate-200">
                            {item['title']}
                        </li>
                    </ol>
                </div>
                <div className={`${isDropdownOpen ? 'top-[7.65rem]' : 'hidden top-[3.8125rem]'} lg:block fixed inset-0 right-auto pb-10 px-8 overflow-y-auto`}>
                    <RetrieveLists>
                        {data.map((x) => (
                            <button key={x['name']} onClick={() => setItem(x)}
                                className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" >
                                {x['name']}
                            </button>
                        ))}
                    </RetrieveLists>
                </div>
                <div className={`${isDropdownOpen ? 'hidden' : ''} lg:pl-[19.5rem]`}>
                    <GitHubContent />
                </div>
            </urlContext.Provider >
        </div >
    )
}