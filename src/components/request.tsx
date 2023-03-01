import React, { useState, useEffect } from 'react';

const base_url = 'https://9e240d7v0k.execute-api.ap-northeast-2.amazonaws.com/api'

const postRecommend = async (mbti: string[], personnel: number) => {
  const recommend_path = base_url + '/mbti/recommend'
  const response = await fetch(recommend_path, {
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ 'mbti': mbti, 'personnel': personnel }),
    method: 'POST',
    mode: "cors",
  })
  return response.json()
}

export default function TestRequest() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)

  useEffect(() => {
    // Update the document title using the browser API
    if (count > 0) {
      document.title = `You clicked ${count} times`
    }
    const fetchData = async () => {
      setData(await postRecommend(['ENFJ'], 3))
    }
    fetchData().catch(console.error)
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700 p-3 rounded" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {JSON.stringify(data)}
    </div>
  );
}