import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../components/shared/Navbar"
import { Footer } from "../components/shared/Footer"
import { Banner } from "../components/home/Banner"
import { Newsletter } from "../components/home/Newsletter"

export const RootLayout = () => {
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white">
      <Navbar />
      {pathname === "/" && <Banner />}
      <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 my-10 flex-1"><Outlet /></main>
      {pathname === "/" && <Newsletter />}
      <Footer />
    </div>
  )
}