const STORAGE = localStorage

export default class Storage {
  static set(name: string, value: string) {
    STORAGE.setItem(name, value)
  }

  static get(name: string) {
    return STORAGE.getItem(name) || ''
  }

  static remove(name: string) {
    STORAGE.removeItem(name)
  }

  static clear() {
    STORAGE.clear()
  }
}
