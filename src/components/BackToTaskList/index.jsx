import { Link } from 'react-router-dom'
import styles from './BackToTaskList.module.scss'

export default function BackToTaskList() {
  return (
    <button className={`btn ${styles.implement}`}>
      <Link to='/'>Back to Task List</Link>
    </button>
  )
}
