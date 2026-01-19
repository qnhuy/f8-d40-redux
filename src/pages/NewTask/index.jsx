import { useState } from 'react'
import styles from './NewTask.module.scss'
import { createTask } from '../../services'
import { useDispatch } from '../../libs/react-redux/hooks'
import { useNavigate } from 'react-router-dom'
import TaskForm from '../../components/TaskForm'

export default function NewTask() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function handleCreateTask(task) {
    try {
      setIsLoading(true)
      const newTask = await createTask(task)
      dispatch({ type: 'ADD_TASK', payload: newTask })
      navigate('/')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.newTaskContainer}>
      <h1 className={styles.title}>Add New Task</h1>
      <TaskForm
        onSubmit={handleCreateTask}
        submitText='Create'
        isLoading={isLoading}
      />
    </div>
  )
}
