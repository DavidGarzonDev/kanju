import { BiChevronRight } from "react-icons/bi"
import { Link } from "react-router-dom"
import { socialLinks } from "../../constants/Links"

export const Footer = () => {
    return (
        <footer className="py-12 bg-black px-12 mt-10 flex justify-between gap-10 text-slate-200 text-sm flex-wrap md:flex-nowrap">
            <Link to="/" className={`text-2xl font-bold tracking-tighter transition-all text-white flex-1`}>
                K A N J U
            </Link>
            <div className="flex flex-col gap-4 flex-1">
                <p className="font-semibold uppercase tracking-tighter" >
                    Suscribete

                </p>
                <p className="text-xs">Recibe promociones y novedades en tu correo</p>
                <div className="border border-gray-800 flex items-center gap-2 px-3 py-2 rounded-full  ">
                    <input type="email" 
                    placeholder="Ingresa tu correo"
                    className="pl-2 bg-black text-slate-200 w-full focus: outline-none"
                    />
                    <button className="text-slate-200">
                        <BiChevronRight size={20} />
                    </button>
                </div>

            </div>
            <div className="flex flex-col gap-4 flex-1">
                <p className="font-semibold uppercase tracking-tighter">
                    Politicas de privacidad
                </p>
                <nav className=" flex flex-col gap-2 text-xs font-medium">
                    <Link to="#">Productos</Link>
                    <Link to="#" className="text-slate-200 hover:text-white">Politicas de privacidad</Link>
                    <Link to="#" className="text-slate-200 hover:text-white">Terminos de uso</Link>
                </nav>
            </div>
            <div className="flex flex-col gap-4 flex-1">
                <p className="font-semibold uppercase tracking-tighter">
                    Siguenos
                </p>
                <p className="text-xs leading-6">
                    Encuentranos en nuestras redes sociales y enterate de las ultimas novedades, promociones y mas.
                </p>
                <div className="flex ">
                    {
                        socialLinks.map((link) => (
                            <a 
                            key={link.id} 
                            href={link.href}
                            target="_blank" 
                            rel="noreferrer" className="text-slate-300 border border-gray-800 w-full h-full py-3.5 flex items-center justify-center transition-all hover:text-red-600" >
                                {link.icon}
                            </a>
                        ))
                    }

                </div>

            </div>
        </footer>
    )
}
