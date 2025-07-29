import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import {Woman} from "../pages/Woman";
import  { Man }  from "../pages/Man";

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


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,

        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'man',
                element: <Man products={sampleProducts} />
            },
            {
                path: 'woman',
                element: <Woman/>
            },
            
        
        ]

    }
]
);