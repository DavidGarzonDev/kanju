import { Link } from "react-router-dom"

export const Banner = () => (
  <section className="relative min-h-[620px] overflow-hidden bg-black text-white sm:min-h-[700px]">
    <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{backgroundImage:"url('/img/banner-new.webp')"}} />
    <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-[#050505]" />
    <div className="relative z-10 flex min-h-[620px] items-end px-6 pb-20 sm:min-h-[700px] sm:px-10 lg:px-16 lg:pb-24">
      <div className="max-w-3xl"><p className="mb-5 text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">DROP 001 / DEMONY</p><h1 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] sm:text-7xl lg:text-9xl">Born<br/>from<br/>the dark.</h1><p className="mt-7 max-w-xl text-sm leading-6 text-white/65 sm:text-base">Streetwear para quienes no necesitan permiso para ser diferentes.</p><Link to="/man" className="mt-8 inline-flex border border-white px-7 py-3 text-xs font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-black">Explorar drop</Link></div>
    </div>
  </section>
)