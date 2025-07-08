import { Link } from "react-router-dom"

export const Banner = () => {
    return (
        <div className="relative bg-black text-white">
            {/* IMAGEN DE FONDO */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-90 h-full"
                style={{ backgroundImage: "url('/img/banner.png')" }}
            />
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black opacity-20" />

            {/* CONTENIDO */}
            <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center lg:py-40 lg:px-8">
                <h1 className="text-4xl font-extrabold mb-4 md:text-6xl tracking-tight uppercase">
                    Viste Diferente. <br /> Viste K a n j u.
                </h1>
                <p className="text-lg mb-8 md:text-xl max-w-2xl">
                    Ropa creada para los que no siguen a nadie. Estilo urbano, rebelde y sin miedo a ser distinto.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                    <Link
                        to="/man"
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
                    >
                        Ropa Hombre
                    </Link>
                    <Link
                        to="/woman"
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
                    >
                        Ropa Mujer
                    </Link>
                </div>
            </div>
        </div>
    );
};
