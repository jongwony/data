const base_url = 'https://9e240d7v0k.execute-api.ap-northeast-2.amazonaws.com/api'

export const postRecommend = async (mbti: string[], personnel: number) => {
    const recommend_path = base_url + '/mbti/recommend'
    const response = await fetch(recommend_path, {
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ 'mbti': mbti, 'personnel': personnel }),
        method: 'POST',
        mode: "cors",
    })
    return response.json()
}