import { useState, useEffect } from 'react'
import { Logement, CollapseInfo } from 'utils/types'

export function useApi(url: string): Logement[] | CollapseInfo[] {
  const [response, setResponse] = useState<Logement[] | CollapseInfo[]>([])
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          try {
            return res.json()
          } catch (e: any) {
            throw new Error(e.message)
          }
        } else {
          return new Error('Problème acces API')
        }
      })
      .then((data) => {
        setResponse(data)
      })
  }, [url])
  return response
}
