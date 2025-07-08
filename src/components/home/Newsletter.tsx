export const Newsletter = () => {
  return (
    <div className="relative bg-black text-white py-40">
      
      {/* Imagen de fondo con capa oscura */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://i.postimg.cc/Z0kttc15/Chat-GPT-Image-8-jul-2025-01-21-03-p-m.png)" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Contenido */}
      <div className="container relative z-10 mx-auto px-6 flex justify-center text-center">
        <div className="bg-black/60 backdrop-blur-md p-10 rounded-2xl shadow-lg max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wider leading-tight">
            No Somos Una Marca.
          </h2>
          <p className="text-base md:text-lg leading-relaxed font-medium tracking-wide">
            Somos una forma de ser. Somos para los que corren con lobos, para los que no temen ser diferentes, para los que entienden que el estilo es más que ropa: es actitud.
          </p>
        </div>
      </div>

    </div>
  );
}
