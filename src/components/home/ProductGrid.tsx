import CardProduct from "../products/CardProduct";

interface Props {
    title: string;
    products: any[];
}

const ProductGrid = ({ title, products }: Props) => {
    return (
        <section className="my-32 px-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center  -mt-8">
                {title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                {products.map((product, index) => (
                    <CardProduct
                        key={product.id || `${product.slug}-${index}`}
                        img={product.img || "https://via.placeholder.com/250"}
                        hoverImg={product.hoverImg}
                        name={product.name || product.title || "Producto"}
                        price={product.price || 0}
                        slug={product.slug || "default-slug"}
                        color={product.color || "Sin color"}
                        sizes={product.sizes || {}} // 
                        category={product.category || "Sin categoría"}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
