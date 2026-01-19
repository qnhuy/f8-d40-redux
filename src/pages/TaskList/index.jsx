import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from '../../libs/react-redux/hooks'
import styles from './TaskList.module.scss'
import { deleteTask, getTasks } from '../../services'
import { useNavigate } from 'react-router-dom'
import TaskItem from '../../components/TaskItem'
import Loading from '../../components/Loading'

export default function TaskList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const taskList = useSelector((state) => state.tasks)

  const fetchTasks = useCallback(async () => {
    try {
      setIsLoading(true)
      const tasks = await getTasks()
      dispatch({ type: 'SET_TASK', payload: tasks })
    } catch (err) {
      window.alert(err)
    } finally {
      setIsLoading(false)
    }
  }, [dispatch])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  async function handleDeleteTask(task) {
    try {
      if (window.confirm(`Are you sure to delete task "${task.title}"`)) {
        setIsLoading(true)
        await deleteTask(task.id)
        dispatch({ type: 'DELETE_TASK', payload: task.id })
      }
    } catch (err) {
      window.alert(err)
    } finally {
      setIsLoading(false)
    }
  }

  function handleEditTask(taskId) {
    navigate(`/${taskId}/edit`)
  }

  function navigateToCreateTask() {
    navigate('/new-task')
  }

  return (
    <div className={styles.taskListContainer}>
      {isLoading && <Loading />}
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Task List</h1>
          <button
            onClick={navigateToCreateTask}
            className={`btn ${styles.createBtn}`}
          >
            Create new task
          </button>
        </div>
        <ul className={styles.taskList}>
          {taskList ? (
            taskList.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={() => handleDeleteTask(task)}
                onEdit={() => handleEditTask(task.id)}
                isLoading={isLoading}
              />
            ))
          ) : (
            <span>There are no tasks yet</span>
          )}
        </ul>
      </div>
    </div>
  )
}
