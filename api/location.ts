import { NowRequest, NowResponse } from '@now/node'
import fetch from 'isomorphic-unfetch'

export default async (req: NowRequest, res: NowResponse) => {
  const params = new URLSearchParams()
  Object.keys(req.query).forEach(key =>  {
    if (key !== 'endpoint') params.set(key, req.query[key] as string)
  })

  try {
    const url = new URL('https://www.metaweather.com/api/location/' + req.query.endpoint + '?' +  params.toString())
    const result = await fetch(url.toString())
    const contentType = result.headers.get('Content-Type')
    const data = contentType && contentType.includes('application/json')
      ? await result.json()
      : {message: result.statusText}
    res.status(result.status)
    res.json(data)
  } catch (error) {
    res.json({message: error.message})
    res.status(500)
  }
}