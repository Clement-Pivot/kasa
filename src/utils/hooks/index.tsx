import { useState, useEffect } from 'react'
import { Logement } from '../types'

export function useApi(url: string): Logement[] {
  const [response, setResponse] = useState<Logement[]>([])
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
