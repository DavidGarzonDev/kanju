import { Link } from "react-router-dom"

export const Logo = () => (
  <Link to="/" className="group flex items-center gap-3" aria-label="DEMONY">
    <svg viewBox="0 0 44 32" className="h-8 w-10" fill="none" aria-hidden="true">
      <path d="M5 27C5 18 7 9 13 4C15 9 18 13 22 15C26 13 29 9 31 4C37 9 39 18 39 27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 24C15 21 18 20 22 20C26 20 29 21 32 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span className="text-xl sm:text-2xl font-black tracking-[0.28em]">DEMONY</span>
  </Link>
)