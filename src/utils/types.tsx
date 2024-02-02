export type Host = {
  name: string
  picture: string
}

export type AccessedLogement = {
  logement: Logement
}

export type Logement = {
  cover: string
  description: string
  equipements: string[]
  host: Host
  id: string
  location: string
  pictures: string[]
  rating: number
  tags: string[]
  title: string
}
