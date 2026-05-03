
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './Components/EmployeeComponent'
import ListEmployeeComponent from './Components/ListEmployeeComponent'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="/all-employees" element={<ListEmployeeComponent />} />
        <Route path="/add-employee" element={<EmployeeComponent />} />
        <Route path="/update-employee/:id" element={<EmployeeComponent />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App