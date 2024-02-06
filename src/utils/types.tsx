import { ReactElement } from 'react'

export type Host = {
  name: string
  picture: string
}

export type Logement = {
  cover: string
  description: string
  equipments: string[]
  host: Host
  id: string
  location: string
  pictures: string[]
  rating: number
  tags: string[]
  title: string
}

export type CollapseInfo = {
  id: string
  title: string
  content: ReactElement
}
