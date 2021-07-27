import { Filter, filters } from "src/app/models/filter.model"
import Storage from "src/app/utils/storage"

const key: string = 'filter'
const defaultValue: Filter = Filter.All

export const get = () => {
  return tryParseJSON(Storage.get(key))
}

export const set = (filter: string) => {
  Storage.set(key, filter)
}

const tryParseJSON = (string: string) => {
  const storageFilter = filters.find((item) => item === string)

  if (storageFilter !== undefined) {
    return storageFilter
  }

  set(defaultValue)

  return defaultValue
}