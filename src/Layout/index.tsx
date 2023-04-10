import { Outlet } from "react-router-dom";
import { Header } from '../components/Header'
import { Navbar } from "../components/NavBar";



export const Layout = () => {
  return (
    <div className="flex flex-col h-screen" >
      <Navbar />
      <Header />
      <div className="max-w-4xl w-full mx-auto px-4">
        <Outlet />
      </div>



    </div>
  )
}
