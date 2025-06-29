import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import ProductCard from '../ProductCard';

const PraVoce = () => {
    {/*Aba de produtos feito pro Mobile */}
    let produtosMobile = [
        {
          id: "1",
          emCima: "Visto Recentemente",
          image: "/Mercado-Livre/assets/Recentes/FoneOuvido.webp",
          name: "Fone Ouvido Retorno Palco Celular Esportivo...",
          priceDiscount: "R$ 45.99",
          price: "R$ 39.99",
          descricao: "Frete grátis",

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
         
        },
    ]

    {/*Aba de produtos feito pro Desktop */}
    let produtosDesktop = [
      {
        id: "1",
        emCima: "Visto Recentemente",
        image: "/Mercado-Livre/assets/Recentes/FoneOuvido.webp",
        name: "Fone Ouvido Retorno Palco Celular Esportivo...",
        priceDiscount: "R$ 45.99",
        price: "R$ 39.99",
        descricao: "Frete grátis",
        imageSize: " mb-[28px] w-[120px] h-[100px] md:ml-[45px]",
        productSize: "w-[320px] h-[320px]" 


      },

      {
        id: "2",
        emCima: "Também te Interessa",
        image: "/Mercado-Livre/assets/Recentes/Microfone.webp",
        name: "Kit Profissional Microfone Condensador Bm800...",
        price: "R$ 87.90",
        descricao: "Frete grátis",
        imageSize: " mb-[28px] w-[130px] h-[110px] ml-[40px] md:ml-[30px]",
        productSize: "w-[320px] h-[320px]" 


      },

      {
        id: "3",
        emCima: "O que você quer",
        image: "/Mercado-Livre/assets/Recentes/Notebook.webp",
        name: "Notebook Samsung Galaxy Book4 Intel U300 (1.20...",
        price: "R$ 87.90",
        descricao: "Frete grátis",
        imageSize: " mb-[28px] w-[150px] h-[110px] md:ml-[30px]",
        productSize: "w-[320px] h-[320px]" 

        
      },

      {
        id: "4",
        emCima: "Meios de pagamento",
        image: "/Mercado-Livre/assets/Recentes/carteira.svg",
        name: "Pague suas comras com rapidez e segurança",
        mostrarMeios : "Mostrar meios",
        imageSize: " mb-[28px] w-[140px] h-[130px] md:ml-[30px]",
        productSize: "w-[320px] h-[320px]" 
      },

      {
        id: "5",
        emCima: "Menos de R$100",
        image: "/Mercado-Livre/assets/Recentes/MenosDe100.svg",
        name: "Confira produtos com preços baixos.",
        mostrarMeios : "Mostrar produtos",
        imageSize: " mb-[28px] w-[140px] h-[130px] md:ml-[30px]",
        productSize: "w-[320px] h-[320px]" 

        
      },

      {
        id: "6",
        emCima: "Mais vendidos",
        image: "/Mercado-Livre/assets/Recentes/MaisVendidos.svg",
        name: "Explore os produtos que são tendência",
        mostrarMeios : " Mais vendidos",
        imageSize: " mb-[28px] w-[140px] h-[130px] md:ml-[30px]",
        productSize: "w-[320px] h-[320px]" 


      },

      {
        id: "7",
        emCima: "Compra garantida",
        image: "/Mercado-Livre/assets/Recentes/CompraGarantida.svg",
        name: "Você pode devolver sua compra grátis",
        mostrarMeios : "Como funciona",
        imageSize: " mb-[28px] w-[140px] h-[130px] md:ml-[30px]",
        productSize: "w-[320px] h-[320px]" 


      },
  ]

    return (
      <>
      {/*Slide feito apenas pro mobile */}
      <div className='md:hidden'>
        <Swiper 
          slidesPerView={2.3} // Ajustado para mostrar menos produtos de uma vez
          slideToClickedSlide={true}
          freeMode={true}
        >
          {produtosMobile.map((produto) => (
            <SwiperSlide key={produto.id} className="pb-[10px]">
              <ProductCard 
                {...produto} 
                productSize="w-[140px] h-[260px]" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*Slide feito apenas pro desktop */}
      <div className='hidden md:block bg-gradient-to-b from-[#FEF724] to-[#EBEBEB]'>
        <div className='w-[1250px] ml-[435px] z-[10] relative'>
          <Swiper 
            slidesPerView={6}
            modules={[Navigation]} 
            navigation={true}
            spaceBetween={10}
          >
            {produtosDesktop.map((produto) => (
              <SwiperSlide key={produto.id}>
                <div className='flex justify-center items-center'>
                  <ProductCard {...produto} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      </>
    )
}

export default PraVoce;
