import { useEffect, useRef, useState } from 'react'
import styles from './TaskForm.module.scss'
import Loading from '../Loading'

export default function TaskForm({
  initialData = '',
  onSubmit,
  submitText = 'Submit',
  isLoading,
}) {
  const [title, setTitle] = useState(initialData)
  const [error, setError] = useState('')
  const inputRef = useRef(null)

  function handleBeforeSubmit(e) {
    e.preventDefault()
    if (title.trim().length === 0) {
      setError('Task title cannot be empty')
      inputRef.current.focus()
      return
    }
    onSubmit({ title })
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    setTitle(initialData)
  }, [initialData])

  return (
    <form onSubmit={handleBeforeSubmit} className={styles.taskFormContainer}>
      {isLoading && <Loading />}
      <div>
        <input
          ref={inputRef}
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
      <button
        type='submit'
        className={`btn ${styles.btn} ${isLoading && 'loadingBtn'}`}
      >
        {!isLoading ? submitText : ''}
      </button>
    </form>
  )
}
