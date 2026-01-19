import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/tasks',
})

http.interceptors.response.use((response) => response.data)

export async function handleFetch(fetchFuntion) {
  try {
    const result = await fetchFuntion()
    return result
  } catch (err) {
    console.error(err)
  }
}

export async function getTasks() {
  const tasks = handleFetch(() => http.get('/'))
  return tasks
}

export async function getTaskById(taskId) {
  const task = handleFetch(() => http.get('/' + taskId))
  return task
}

export async function deleteTask(taskId) {
  const response = handleFetch(() => http.delete('/' + taskId))
  return response
}

export async function createTask(newTask) {
  const task = handleFetch(() => http.post('/', newTask))
  return task
}

export async function updateTask(taskId, data) {
  const task = handleFetch(() => http.patch('/' + taskId, data))
  return task
}
