import { FeatureGrid } from "../components/home/FeatureGrid";
import ProductGrid from "../components/home/ProductGrid";

export const HomePage = () => {
    const sampleProducts = [
        {
            img: "/ejemplo.webp",
            hoverImg: "/ejemplo2.webp",
            name: "Camiseta Tigre",
            price: 45000,
            slug: "camiseta-tigre",
            color: "Negro",
            sizes: {
                S: 5,
                M: 3,
                L: 2,
            },
            category: "Camisetas",
        },
        {
            img: "/ejemplo.webp",
            hoverImg: "/ejemplo2.webp",
            name: "Hoodie Pulpo",
            price: 95000,
            slug: "hoodie-pulpo",
            color: "Gris oscuro",
            sizes: {
                M: 4,
                L: 3,
            },
            category: "Hoodies",
        },
        {
            img: "/ejemplo.webp",
            hoverImg: "/ejemplo2.webp",
            name: "Camiseta Abstracta",
            price: 42000,
            slug: "camiseta-abstracta",
            color: "Blanco",
            sizes: {
                S: 6,
                M: 4,
                L: 2,
            },
            category: "Camisetas",
        },
        {
            img: "/ejemplo.webp",
            hoverImg: "/ejemplo2.webp",
            name: "Sudadera Gato",
            price: 88000,
            slug: "sudadera-gato",
            color: "Negro",
            sizes: {
                XL: 1,
            },
            category: "Sudaderas",
        },
        {
            img: "/ejemplo.webp",
            hoverImg: "/ejemplo2.webp",
            name: "Sudadera Gato",
            price: 88000,
            slug: "sudadera-gato",
            color: "Negro",
            sizes: {
                XL: 1,
            },
            category: "Sudaderas",
        },
        {
            img: "/ejemplo.webp",
            hoverImg: "/ejemplo2.webp",
            name: "Sudadera Gato",
            price: 88000,
            slug: "sudadera-gato",
            color: "Negro",
            sizes: {
                XL: 1,
            },
            category: "Sudaderas",
        },
        {
            img: "/ejemplo.webp",
            hoverImg: "/ejemplo2.webp",
            name: "Sudadera Gato",
            price: 88000,
            slug: "sudadera-gato",
            color: "Negro",
            sizes: {
                XL: 1,
            },
            category: "Sudaderas",
        },
        {
            img: "/ejemplo.webp",
            hoverImg: "/ejemplo2.webp",
            name: "Sudadera Gato",
            price: 88000,
            slug: "sudadera-gato",
            color: "Negro",
            sizes: {
                XL: 1,
            },
            category: "Sudaderas",
        },
    ];

    return (<>
        <div className="flex flex-col gap-10 mt-0">
            <FeatureGrid />
            <ProductGrid title="Nuevo drop" products={sampleProducts} />
            
        </div>

        <div className=" -mt-30">
            <ProductGrid title="Lo más vendido" products={sampleProducts} />

        </div>
        </>
    );
};
