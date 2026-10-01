import { Link, NavLink } from "react-router-dom"
import { navbarLinks } from "../../constants/Links"
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi"
import { FaBarsStaggered } from "react-icons/fa6"
import { Logo } from "./Logo"

export const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/95 backdrop-blur-md text-white">
    <div className="flex h-20 items-center justify-between px-5 sm:px-8 lg:px-12">
      <Logo />
      <nav className="hidden md:flex items-center gap-8">
        {navbarLinks.map(link => (
          <NavLink key={link.id} to={link.href} className={({isActive}) => `text-xs font-semibold uppercase tracking-[0.2em] transition hover:text-white/60 ${isActive ? "text-white" : "text-white/50"}`}>{link.title}</NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-5">
        <button aria-label="Buscar"><HiOutlineSearch size={22}/></button>
        <Link to="/account" aria-label="Cuenta" className="hidden sm:grid h-8 w-8 place-items-center rounded-full border border-white/30 text-xs font-semibold">D</Link>
        <button aria-label="Carrito" className="relative"><span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-white px-1 text-[9px] font-bold text-black">0</span><HiOutlineShoppingBag size={22}/></button>
        <button aria-label="Menú" className="md:hidden"><FaBarsStaggered size={22}/></button>
      </div>
    </div>
  </header>
)