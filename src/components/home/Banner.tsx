import { Link } from "react-router-dom"


export const Banner = () => {
    return <div className="relative bg-gray-950 text-white">
        {/*  IMAGEN DE FONDO */}
        <div className="absolute inset-0 bg-cover bg-center opacity-70 h-full"
            style={{ backgroundImage: "url('/img/banner.webp')" }}
        />
        {/*  OVERLAY */}
        <div className="absolute inset-0 bg-black opacity-50" />
        {/*  CONTENIDO */}

        <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center lg:py-30 lg:px-8 ">
            <h1 className="text-4xl font-bold mb-4 md:text-6xl ">Bienvenido a Kanju</h1>
            <p className="text-lg mb-8 md:text-xl ">
                Mira lo que hay de nuevo en nuestra tienda. ¡Nuevos productos, nuevas ofertas y mucho más!

            </p>
            <Link to="/man" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300 ease-in-out mb-5">
                Ropa hombre
            </Link>
            <Link to="/woman" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300 ease-in-out">
                Ropa mujer
            </Link>

        </div>
    </div>
}
