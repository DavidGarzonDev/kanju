import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import {Woman} from "../pages/Woman";
import  { Man }  from "../pages/Man";
import { SampleProducts } from '../components/shared/SampleProducts'; 



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
                element: <Man products={SampleProducts} />
            },
            {
                path: 'woman',
                element: <Woman/>
            },
            
        
        ]

    }
]
);