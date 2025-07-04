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
                path: 'man',
                element: <div>Ropa de Hombre</div>
            },
            {
                path: 'woman',
                element: <div>Ropa de Mujer</div>
            },
            
        
        ]

    }
]
);