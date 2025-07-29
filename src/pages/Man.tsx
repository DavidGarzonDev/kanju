import CardProduct from "../components/products/CardProduct";

interface Props {
  products: any[];
}

export const Man = ({ products }: Props) => {
  
  if (!products || products.length === 0) {
    return <p className="text-center my-32 text-xl">Cargando productos...</p>;
  }

  return (
    <>
      <h1 className="text-5xl font-semibold text-center mb-12">
        Ropa de Hombre
      </h1>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {/* Filtros */}
        <div>Filtros</div>

        <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gap-12">
          <div className="grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4">
            {products.map((product, index) => (
              <CardProduct
                key={product.id || `${product.slug}-${index}`}
                img={product.img || "https://via.placeholder.com/250"}
                hoverImg={product.hoverImg}
                name={product.name || product.title || "Producto"}
                price={product.price || 0}
                slug={product.slug || "default-slug"}
                color={product.color || "Sin color"}
                sizes={product.sizes || {}}
                category={product.category || "Sin categoría"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
