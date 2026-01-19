import { useNavigate, useParams } from 'react-router-dom'
import styles from './EditTask.module.scss'
import { useCallback, useEffect, useState } from 'react'
import TaskForm from '../../components/TaskForm'
import { getTaskById, updateTask } from '../../services'
import { useDispatch } from '../../libs/react-redux/hooks'

export default function EditTask() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [task, setTask] = useState({ title: '' })
  const dispatch = useDispatch()

  const getTask = useCallback(async () => {
    try {
      setIsLoading(true)
      const fetchedTask = await getTaskById(id)
      setTask(fetchedTask)
    } finally {
      setIsLoading(false)
    }
  }, [id, setTask, setIsLoading])

  useEffect(() => {
    getTask()
  }, [getTask])

  async function handleSaveTask(data) {
    try {
      setIsLoading(true)
      const updatedTask = await updateTask(id, data)
      dispatch({ type: 'UPDATE_TASK', payload: updatedTask })
      navigate('/')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.editTaskContainer}>
      <h1 className={styles.title}>Edit Task</h1>
      <TaskForm
        onSubmit={handleSaveTask}
        submitText='Save'
        initialData={task.title}
        isLoading={isLoading}
      />
    </div>
  )
}
