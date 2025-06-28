import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard';

const PraVoce = () => {
    let Produtos = [
        {
          id: "1",
          emCima: "Visto Recentemente",
          image: "/Mercado-Livre/assets/Recentes/FoneOuvido.webp",
          name: "Fone Ouvido Retorno Palco Celular Esportivo...",
          priceDiscount: "R$ 45.99",
          price: "R$ 39.99",
          descricao: "Frete grátis"
        },

        {
          id: "2",
          emCima: "Também te Interessa",
          image: "/Mercado-Livre/assets/Recentes/Microfone.webp",
          name: "Kit Profissional Microfone Condensador Bm800...",
          price: "R$ 87.90",
          descricao: "Frete grátis"
        },

        {
          id: "3",
          emCima: "O que você quer",
          image: "/Mercado-Livre/assets/Recentes/Notebook.webp",
          name: "Notebook Samsung Galaxy Book4 Intel U300 (1.20...",
          price: "R$ 87.90",
          descricao: "Frete grátis",
          imageSize: " mb-[28px]"
        },
    ]

    return (
        <>
         <Swiper slidesPerView={2.5}>
           {Produtos.map((produto) => (
            <SwiperSlide key={produto.id}>
                <div className='flex gap-2 pb-[10px]'>
                    <ProductCard {...produto} />
                </div>
             </SwiperSlide>
           ))}
         </Swiper>
        </>
    )
}

export default PraVoce;
