import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import {Woman} from "../pages/Woman";
import  { Man }  from "../pages/Man";


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
                element: <Man/>
            },
            {
                path: 'woman',
                element: <Woman/>
            },
            
        
        ]

    }
]
);