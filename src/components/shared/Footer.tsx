import { Link } from "react-router-dom"
import { socialLinks } from "../../constants/Links"

export const Footer = () => (
  <footer className="border-t border-white/10 bg-[#030303] px-6 py-14 text-white sm:px-10 lg:px-16">
    <div className="grid gap-12 md:grid-cols-3">
      <div><Link to="/" className="text-3xl font-black tracking-[0.3em]">DEMONY</Link><p className="mt-5 max-w-sm text-xs leading-6 text-white/45">Streetwear nacido de la oscuridad. Piezas para quienes encuentran identidad en lo que llevan puesto.</p></div>
      <div className="space-y-4"><p className="text-xs font-bold uppercase tracking-[0.25em]">Información</p><nav className="flex flex-col gap-3 text-xs text-white/50"><Link to="/man">Colección</Link><Link to="#">Términos de uso</Link><Link to="#">Privacidad</Link></nav></div>
      <div className="space-y-4"><p className="text-xs font-bold uppercase tracking-[0.25em]">Síguenos</p><p className="text-xs leading-6 text-white/45">Nuevos drops, piezas limitadas y contenido de DEMONY.</p><div className="flex gap-2">{socialLinks.map(link => <a key={link.id} href={link.href} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center border border-white/15 text-white/60 hover:border-white hover:text-white">{link.icon}</a>)}</div></div>
    </div>
    <div className="mt-12 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-white/30">© {new Date().getFullYear()} DEMONY. Todos los derechos reservados.</div>
  </footer>
)