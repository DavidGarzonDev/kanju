import { Link } from "react-router-dom"

export const Logo = () => (
  <Link to="/" className="group flex items-center gap-3" aria-label="DEMONY">
    <img src="/brand/demony-logo.svg" alt="" className="h-11 w-auto object-contain sm:h-12" aria-hidden="true" />
    <span className="brand-wordmark text-[2rem] text-white sm:text-[2.35rem]">DEMONY</span>
  </Link>
)