
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CartProvider } from './componentes/context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
    <CartProvider>
        <App />
    </CartProvider>
)
