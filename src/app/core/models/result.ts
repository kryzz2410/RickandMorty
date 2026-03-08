import { Location } from "./location"
import { Origin } from "./origin"

export interface Result {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin | null
  location: Location | null
  image: string
  episode: string[]
  url: string
  created: string
}
