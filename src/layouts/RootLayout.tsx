import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../components/shared/Navbar"
import { Footer } from "../components/shared/Footer"
import { Banner } from "../components/home/Banner"
import { Newsletter } from "../components/home/Newsletter"


export const RootLayout = () => {
    const { pathname } = useLocation()
    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <Navbar />
                {pathname === '/' && <Banner/>}
            
                <main className="container my-8 flex-1 mx-auto">
                    <Outlet />
                </main>
                {pathname === '/' && <Newsletter/>}



            <Footer />
        </div>
    )
}
