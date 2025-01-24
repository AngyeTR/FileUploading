import { Routes, Route } from "react-router-dom"
import UploadFilesPage from "./Pages/UploadFiles/UploadFilesPage"
import Layout from "./Pages/Layout"
import LoginPage from "./Pages/Login/Login"

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/uploadFile" element={ <UploadFilesPage/> } />
      </Routes>
    </Layout>
    
    </>
  )
}

export default App
