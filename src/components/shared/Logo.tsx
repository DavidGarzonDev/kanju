import { Link } from "react-router-dom"

export const Logo = () => (
  <Link to="/" className="group flex items-center gap-4" aria-label="DEMONY">
    <img src="/brand/demony-logo.svg" alt="" className="h-14 w-auto object-contain" aria-hidden="true" />
    <span className="text-xl sm:text-2xl font-black tracking-[0.28em]">DEMONY</span>
  </Link>
)