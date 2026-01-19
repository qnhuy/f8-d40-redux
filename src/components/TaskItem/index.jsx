import styles from './TaskItem.module.scss'

export default function TaskItem({ task, onEdit, onDelete, isDeleting }) {
  return (
    <li className={styles.taskItemWrapper}>
      <span>{task.title}</span>

      <div className={styles.actions}>
        <button onClick={onEdit} className='btn'>
          Edit
        </button>
        <button
          onClick={onDelete}
          className={`btn ${isDeleting && 'loadingBtn'}`}
        >
          {isDeleting ? '' : 'Delete'}
        </button>
      </div>
    </li>
  )
}
