import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navigasi from './Component/Page/Navigasi'
import DataUser from './Component/Page/DataUser'
import Form from './Component/Page/Form'

function Home() {
  return (
    <h1>Hello, React Router!</h1>
  )
}

function About() {
  return (
    <h1>About page goes here! 🎉</h1>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <div className="w-screen bg-primary flex items-center justify-center">
          <nav className="flex fixed top-0 left-0 py-5 shadow-lg rounded-lg w-full lg:static lg:shadow-none lg:rounded-none">
            <h1 className="text-black bg-white text-lg font-semibold px-4 ml-6">Network Call Practice</h1>
            <div className="flex justify-center w-full lg:w-auto">
              <ul className="mx-auto block lg:flex lg:gap-8 px-4">
                <li className="group">
                  <Link to="/" className="text-base text-slate-100 py-2 flex items-center group-hover:text-white" >Register</Link>
                </li>
                <li className="group">
                  <Link to="/about" className="text-base text-slate-100 py-2 flex items-center group-hover:text-white">Users</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/about" element={<DataUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
