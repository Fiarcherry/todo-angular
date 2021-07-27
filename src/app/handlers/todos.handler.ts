import { Todo } from "src/app/models/todo.model"
import Storage from "src/app/storage/storage"
import { seeder } from "src/app/utils/todos.seeder"

const key: string = 'todos'
const importantProperty: string = 'important'
const doneProperty: string = 'done'
const defaultValue: Todo[] = seeder()

export const get = () => {
  return tryParseJSON(Storage.get(key))
}

export const getIndexById = (id: number) => {
  const todos = get()

  const index = todos.findIndex((item: Todo) => item.id === id)

  if (index !== -1) {
    return index
  }

  return null
}

export const set = (todos: Todo[]) => {
  Storage.set(key, JSON.stringify(todos))
}

export const add = (todo: Todo) => {
  const todos = get()

  set([...todos, todo])
}

export const updateLabel = (id: number, label: string) => {
  const todos = get()
  const index = getIndexById(id)

  if (index !== null) {
    const oldTodo = todos[index]
    const newTodo = { ...oldTodo, label: label }
    const newTodos = [...todos.slice(0, index), newTodo, ...todos.slice(index + 1)]

    set(newTodos)
  }
}

export const toggleImportant = (id: number) => {
  toggleProperty(id, importantProperty)
}

export const toggleDone = (id: number) => {
  toggleProperty(id, doneProperty)
}

const tryParseJSON = (string: string) => {
  try {
    const result = JSON.parse(string)

    if (result && typeof result === 'object') {
      return result
    }
  } catch (e) {}

  set(defaultValue)

  return defaultValue
}

const toggleProperty = (id: number, propertyName: string) => {
  const todos = get()
  const index = getIndexById(id)

  if (index !== null) {
    const oldTodo = todos[index]
    const newTodo = { ...oldTodo, [propertyName]: !oldTodo[propertyName] }
    const newTodos = [...todos.slice(0, index), newTodo, ...todos.slice(index + 1)]

    set(newTodos)
  }
}

export const deleteById = (id: number) => {
  const todos = get()
  const index = getIndexById(id)
  
  if (index !== null) {
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]
    
    set(newTodos)
  }
}