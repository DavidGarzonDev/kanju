import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,

        children: [
            {
                index: true,
                element: <div>Inicio</div>
            },
            {
                path: 'clothes',
                element: <div>Ropa</div>
            },
            {
                path: 'about',
                element: <div>Sobre Nosotros</div>
            },
        
        ]

    }
]
);