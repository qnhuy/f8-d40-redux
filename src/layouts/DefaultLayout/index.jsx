import { Outlet } from 'react-router-dom'
import Navigate from './components/Navigate'
import styles from './DefaultLayout.module.scss'

export default function DefaultLayout() {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.navigate}>
        <Navigate />
      </div>
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  )
}
