import { Link } from "react-router-dom"
import { socialLinks } from "../../constants/Links"

export const Footer = () => {
    return (
        <footer className="py-12 bg-black px-8 md:px-16 text-slate-200 text-sm">

            <div className="flex flex-wrap md:flex-nowrap gap-10">

                {/* Logo */}
                <div className="flex-1">
                    <Link to="/" className="text-3xl font-bold text-white tracking-widest uppercase hover:text-red-500 transition-colors">
                        K A N J U
                    </Link>
                </div>

                {/* Navegación */}
                <div className="flex-1 space-y-4">
                    <p className="font-semibold uppercase tracking-tight">
                        Políticas de Privacidad
                    </p>
                    <nav className="flex flex-col gap-2 text-xs font-medium">
                        <Link to="#" className="hover:text-red-500 transition-colors">Productos</Link>
                        <Link to="#" className="hover:text-red-500 transition-colors">Políticas de Privacidad</Link>
                        <Link to="#" className="hover:text-red-500 transition-colors">Términos de Uso</Link>
                    </nav>
                </div>

                {/* Redes Sociales */}
                <div className="flex-1 space-y-4">
                    <p className="font-semibold uppercase tracking-tight">
                        Síguenos
                    </p>
                    <p className="text-xs leading-5">
                        Encuéntranos en nuestras redes y entérate de las últimas novedades, promociones y mucho más.
                    </p>
                    <div className="flex gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-300 border border-gray-800 w-10 h-10 flex items-center justify-center rounded-md hover:text-red-600 hover:border-red-600 transition-all"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            {/* Línea inferior */}
            <div className="mt-10 border-t border-gray-800 pt-4 text-xs text-center text-slate-500">
                © {new Date().getFullYear()} KANJU. Todos los derechos reservados.
            </div>

        </footer>
    )
}
