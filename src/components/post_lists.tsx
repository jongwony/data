import React, { useState, useEffect } from 'react';

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

export default function RetrieveLists() {
    const [data, setData] = useState([])

    useEffect(() => {
        // Update the document title using the browser API
        const fetchData = async () => {
            setData(await postList())
        }
        fetchData().catch(console.error)
    }, []);

    return (
        <nav className="lg:text-sm lg:leading-6 relative">
            <div className="sticky top-0 -ml-0.5 pointer-events-none">
                <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
                    <button className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none">
                            <path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
                        </svg>
                        Quick search...
                        <span className="ml-auto pl-3 flex-none text-xs font-semibold">⌘K</span>
                    </button>

                </div>
            </div>
            <ul className='space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800'>
                {data.map((x) => (
                    <li key={x['name']} >
                        <a href={x['download_url']} className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            {x['name']}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
