import { Link } from 'react-router-dom'
import styles from './Navigate.module.scss'

export default function Navigate() {
  return (
    <ul className={styles.navigateContainer}>
      <li className={styles.navigateItem}>
        <a
          href='/f8-d40-redux/redux.html '
          className={styles.navigateLink}
        >
          Redux Core: Counter
        </a>
      </li>
      <li className={styles.navigateItem}>
        <Link to='/' className={styles.navigateLink}>
          Task Management
        </Link>
      </li>
    </ul>
  )
}
