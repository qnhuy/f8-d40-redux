import { HashRouter, Route, Routes } from 'react-router-dom'
import TaskList from '../../pages/TaskList'
import NewTask from '../../pages/NewTask'
import EditTask from '../../pages/EditTask'
import DefaultLayout from '../../layouts/DefaultLayout'

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<TaskList />} />
          <Route path='new-task' element={<NewTask />} />
          <Route path=':id/edit' element={<EditTask />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
